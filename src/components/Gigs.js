import React from "react";
import Card from 'react-bootstrap/Card';
import './Gigs.css'


function Gigs() {
    return(
        <div className="Card">
      <Card className="Card1" border="dark" style={{ width: '18rem' }}>
        <Card.Header> Sonntag, 16.10.2022, 08:45 Uhr </Card.Header>
        <Card.Body>
          <Card.Title>Kirchweih Schalding</Card.Title>
          <Card.Text>
            Rhythmischer Gottesdienst mit anschließendem Frühshoppen im Pfarrsaal
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="Card1" border="dark" style={{ width: '18rem' }}>
        <Card.Header>Samstag, 22.10.2022, 14:00 Uhr</Card.Header>
        <Card.Body>
          <Card.Title>SV Schalding - TSV Dachau</Card.Title>
          <Card.Text>
            Musikalische Unterstützung für den SVS vor, während und nach dem Spiel
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
}

export default Gigs;