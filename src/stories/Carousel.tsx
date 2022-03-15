import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './carousel.css';

interface CarouselProps {

}

export const Carousel = (
  carouselItems: any[],
) => {
  const [idx, setIdx] = useState(0);
  const [currentCarouselItem, setCarouselItem] = useState(carouselItems[0]);

  const handleClickLeft = () => {
    const newIdx = idx === 0 ? carouselItems.length - 1 : idx - 1;
    setIdx(newIdx);
  }

  const handleClickRight = () => {
    const newIdx = (idx + 1) % carouselItems.length;
    setIdx(newIdx);
  }

  return (
    <div className="carousel">
      <FontAwesomeIcon className="clickable" icon={faChevronLeft} onClick={() => handleClickLeft()} />
      <div className="carousel-item">
        {currentCarouselItem}
      </div>
      <FontAwesomeIcon className="clickable" icon={faChevronRight} onClick={() => handleClickRight()} />
    </div>
  )
}