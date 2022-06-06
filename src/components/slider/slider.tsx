import React, { FC, } from 'react';
import { SliderProps } from 'src/models/slider';
import SliderSlick, { Settings } from 'react-slick';
import Arrow from './arrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './slider.module.scss';
import { v4 as uuidv4 } from 'uuid';

const Slider: FC<SliderProps> = ({images = [], size, withPreview}) => {
  let settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <Arrow type="next"/>,
    prevArrow: <Arrow type="prev"/>,
  };

  if (withPreview) {
    settings = {
      ...settings,
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      customPaging: withPreview && function () {
        return (
          <a><img className={styles.thumb} src={images[0]} alt={images[0]}/></a>
        );
      },
    };
  }

  return (
    <div>
      <SliderSlick  {...settings}>
        {images.map((image) => {
          const key = uuidv4();

          return (
            <div>
              <img
                key={key}
                alt={image}
                src={image}
                className={styles.image}
                style={{maxHeight: `${size}px`}}
              />
            </div>
          )
        })}
      </SliderSlick>
    </div>
  );
};

export default Slider;
