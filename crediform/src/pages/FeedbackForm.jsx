import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function FeedbackForm() {
  const { id } = useParams();
  return (
   <div>
    <input type="text" placeholder='your name' />
    <textarea name="" id="" rows={5} placeholder='your feedback'></textarea>
   </div>
  )
}
