import Carousel from "react-bootstrap/Carousel";
import slider1 from "..//../assets/slider1.jpg";
import slider2 from "..//../assets/slider2.png";
import slider3 from "..//../assets/slider3.jpg";
import "./boot.css";

function BootstrapCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block m-auto"
          height="500px"
          width="1000px"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hurry Up!!</h3>
          <p>
            When it's gone,its gone.
            <br />
            Our Sale is Full of Happiness. Buy the best and forget the rest.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block m-auto"
          height="500px"
          width="1000px"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Hurry Up!!</h3>
          <p>
            When it's gone,its gone.
            <br />
            Our Sale is Full of Happiness. Buy the best and forget the rest.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block m-auto"
          height="500px"
          width="1000px"
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Hurry Up!!</h3>
          <p>
            When it's gone,its gone.
            <br />
            Our Sale is Full of Happiness. Buy the best and forget the rest.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BootstrapCarousel;
