import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
  NavLink,
  Container,
} from 'reactstrap';

import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';

const items = [
  {
    src: './Images/covid3.jpg',
    altText: 'Slide 1',
    caption: 'News',
  },
  {
    src: './Images/covid2.jpg',
    altText: 'Slide 2',
    caption: 'News',
  },
  {
    src: './Images/covid.jpeg',
    altText: 'Slide 3',
    caption: 'News'
  }
];

const MediaHead = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="Headline">News Headline</div> 
        <img src={item.src} alt={item.altText} width="100%" height="600" ></img>
        <CarouselCaption className="CaptionColor" captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default MediaHead;