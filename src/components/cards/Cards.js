import React from 'react'
import "./cards.css"
import { Card } from 'react-bootstrap'

const Cards = () => {
  return (
   
         <div className="parentCard">
      <Card className="card1">
        <Card.Title>On Road</Card.Title>
      </Card>
      <Card className="card2">
        <Card.Title>Completed</Card.Title>
      </Card>
      <Card className="card3">
        <Card.Title>On Road</Card.Title>
      </Card>
   
    
    </div>
  )
}

export default Cards