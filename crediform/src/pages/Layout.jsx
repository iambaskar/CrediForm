import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import FeedbackForm from './FeedbackForm'

export default function Layout() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/feedback-form/:id'  element={<FeedbackForm />} />
        </Routes>
    </Router>
    </>
  )
}
