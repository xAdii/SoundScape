import React, { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";

const MusicOfWords: React.FC = () => {
  useEffect(() => {
    document.title = "SoundScape - The Music of Words";
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="mt-5">
      <div className="display-4 text-center mb-4">The Music of Words</div>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="custom-carousel"
      >
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="/images/firstSlide.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Music is the strongest form of magic.</h3>
            <p>- Marilyn Manson</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="/images/secondSlide.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Without music, life would be a mistake.</h3>
            <p>- Friedrich Nietzsche</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="/images/thirdSlide.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Music can change the world.</h3>
            <p>- Ludwig van Beethoven</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MusicOfWords;
