import React, { useEffect, useState, useRef } from 'react'
import '../styles/homepage.css'
export default function Home() {
  const [position, setPosition] = useState({ x: 50, y: 80 });
  const requestRef = useRef();
  const targetPosition = useRef({ x: 50, y: 80 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    targetPosition.current = { x, y };
  };

  const animateSpotlight = () => {
    setPosition(prevPos => {
      const deltaX = targetPosition.current.x - prevPos.x;
      const deltaY = targetPosition.current.y - prevPos.y;

      return {
        x: prevPos.x + deltaX * 0.1,
        y: prevPos.y + deltaY * 0.1
      };
    });

    requestRef.current = requestAnimationFrame(animateSpotlight);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animateSpotlight);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
    {/* section 1 */}
      <div className="homepage">
        <div className="spotlight" style={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%,  rgba(58, 16, 120, 0.3), rgba(0, 0, 0, 0.7) 70%)`
        }}></div>
        <div className="homepage-content">
          <h1>Elevate Your Brand with Authentic Testimonials</h1>
          <p>In today’s digital world, trust is everything. Our easy-to-use testimonial generator empowers creators and organizations to collect, manage, and showcase authentic feedback from their audience. Whether you’re a small business, an influencer, or a large organization, we’ve got the tools to enhance your credibility and drive engagement</p>
        </div>
      </div>
      
      {/* section 2 */}
      <div className="homepage-sec2">
        
      </div>
    </>
  )
}
