import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import ReactPlayer from 'react-player';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './styles.css';

const FunCarousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={1280}
      naturalSlideHeight={720}
      totalSlides={5}
    >
      <Slider>
        <Slide index={0}>
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=cnXapYkboRQ'
              width='100%'
              height='100%'
              volume={0.1}
            />
          </div>
        </Slide>
        <Slide index={1}>
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=cnXapYkboRQ'
              width='100%'
              height='100%'
              volume={0.1}
            />
          </div>
        </Slide>
        <Slide index={2}>
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=cnXapYkboRQ'
              width='100%'
              height='100%'
              volume={0.1}
            />
          </div>
        </Slide>
        <Slide index={3}>
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=cnXapYkboRQ'
              width='100%'
              height='100%'
              volume={0.1}
            />
          </div>
        </Slide>
        <Slide index={4}>
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=cnXapYkboRQ'
              width='100%'
              height='100%'
              volume={0.1}
            />
          </div>
        </Slide>
      </Slider>
      <div className='buttons'>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default FunCarousel;
