import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../components/Kontakt.css'

function Kontakt() {
    return( 
        <div className="Card">
            <Card border="dark" style={{ width: '18rem' }}>
      <Card.Header>Kontakt BaierBuam and Friends</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Philipp Kohl</ListGroup.Item>
        <ListGroup.Item><a href="mailto:baierbuamandfriends@web.de">baierbuamandfriends@web.de </a> </ListGroup.Item>
        <ListGroup.Item>Tel: 0160  7790533</ListGroup.Item>
        
      </ListGroup>
    </Card>
        </div>
    );
}

export default Kontakt;