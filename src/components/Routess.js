import React from 'react'
import { Link } from 'react-router-dom'

const Routess = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/details'>Details</Link>
        <Link to='/details2'>Details2</Link>
    </div>
  )
}

export default Routess