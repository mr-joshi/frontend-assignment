import React from 'react'
import './loading.css'
const Loading = () => {
  return (
    <div className="loading-screen">
    <div className="spinner" />
    <p className='loading-text'> Loading Table...</p>
  </div>
  )
}

export default Loading