import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bild1 from '../images/image00001.jpeg';
import Bild2 from '../images/image00002.jpeg';
import Bild3 from '../images/image00003.jpeg';

function Home() {
    return(
        <div className="Home">
        <Carousel className="w-50">
      <Carousel.Item> 
        <img
          className="d-block w-100"
          src={ Bild1 }
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>SV Schalding - FC Memmingen</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Bild2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Barbuddies Jubiläum</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Bild3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>75 Jahre SV Schalding</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    );
}

export default Home;