import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { newsData, newsImages } from '../util/news';
import './styles/News.scss';

const News = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className='news-wrap'>
      <div className='inner news-inner'>

        <div className="left-visuals">
          <img src={newsImages.bgBrush} alt="배경 붓터치" className="bg-brush" />
          <img src={newsImages.bottleLight} alt="백세주 밝은 병" className="bottle-light" />
          <img src={newsImages.bottleDark} alt="백세주 어두운 병" className="bottle-dark" />
          <img src={newsImages.rice} alt="쌀" className="rice" />
        </div>

        <div className="right-slider-wrap">
          <Swiper
            slidesPerView={1}
            loop={true}
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className='news-text-slider'
          >
            {newsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="text-content">
                  <h2 className="tit">{item.title}</h2>
                  <h3 className="sub-tit">{item.subtitle}</h3>
                  <p className="desc" dangerouslySetInnerHTML={{ __html: item.desc }} />
                  <p className="contact">{item.contact}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <a href="#" className='btn-prev' onClick={(e)=>e.preventDefault()} ref={prevRef}>prev</a>
          <a href="#" className='btn-next' onClick={(e)=>e.preventDefault()} ref={nextRef}>next</a>
        </div>

      </div>
    </section>
  )
}

export default News;