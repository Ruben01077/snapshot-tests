import React from 'react'
import Card from "react-bootstrap/Card"
import myImage from './myImage.jpg'

function GitHubCard() {
  return (
    <div className='card'>
      <Card style={{ width: "18rem"}} >

        <Card.Img src={myImage} />
        <Card.Body>
        <Card.Title>Ruben01077</Card.Title>
        <Card.Text>My name is Ruben, I'm learning in Bootcamp. </Card.Text>

        </Card.Body>
        

        
      </Card> 

    </div>
  )
}

export default GitHubCard