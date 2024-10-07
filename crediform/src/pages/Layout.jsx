import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import FeedbackForm from './FeedbackForm'
import Navbar from '../components/Navbar'

export default function Layout() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/feedback-form/:id'  element={<FeedbackForm />} />
        </Routes>
    </Router>
    </>
  )
}
