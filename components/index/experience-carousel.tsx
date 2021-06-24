import React from 'react'
import { Swiper, SwiperSlide, } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from 'swiper';

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

import Card from '../card';

SwiperCore.use([Autoplay, Navigation]);

const ExperienceCarousel = () => {
  return (
    <div className="justify-center">
      <Swiper
        className="mySwiper text-white"
        slidesPerView={2}
        loop={true}
      >
        <SwiperSlide>
          <Card company={{ name: "Microsoft", link: "https://www.microsoft.com/en-us/" }} title="Software Engineer" start="February 2020" technologies={["Azure", "C++", "Go", "Kubernetes", "Python"]}>
            Building new services for <a className="text-red-400" href="https://azure.microsoft.com/en-us/solutions/confidential-compute/">Azure confidential computing</a>.
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card company={{ name: "Microsoft", link: "https://www.microsoft.com/en-us/" }} title="Software Engineer" start="February 2020" technologies={["Azure", "C++", "Go", "Kubernetes", "Python"]}>
            Building new services for <a href="https://azure.microsoft.com/en-us/solutions/confidential-compute/">Azure confidential computing</a>.
          </Card>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ExperienceCarousel;
