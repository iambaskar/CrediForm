import React, { useEffect, useState } from 'react'
import { auth, googlAuthProvider } from '../config/firebase'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'

export default function Auth() {
  const [user, setUser] = useState(null);
  const [link, setLink] = useState('');

  const signInWithGoogle = async () =>{
    try{
    await signInWithPopup(auth, googlAuthProvider);
    setUser(auth.currentUser.displayName);
    }catch(err){
        console.error(err);
    }
  };
  
  const handleSignOut = async () => {
    try{
        await signOut(auth);
        console.log("user signed out");
    }catch(err){
        console.error(err);
    }
  };

  const  generateLink = () => {
    const yourLink = `http://localhost:5173/feedback-form/${auth?.currentUser?.uid}`;
    setLink(yourLink);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.displayName);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
        {
            user ? <div>
                <p>Welcome {user}</p>
                <button onClick={generateLink}>Generate link</button>
                <a href={link} target='_blank'>{link}</a>
                <button onClick={handleSignOut}>Sign out</button>
            </div> : <div>
                <h3>Get started</h3>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
        }
    </div>
  )
}
