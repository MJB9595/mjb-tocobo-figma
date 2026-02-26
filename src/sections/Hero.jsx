import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './styles/Hero.scss'
import {heroSlides} from '../util/hero'
const Hero = () => {
  return (
    <div className='hero-wrap'>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }} // 하단 클릭 가능한 버튼
        loop={true}
        className='hero-slider'
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id} style={{ backgroundColor: slide.bgColor }}>
            <div className={`slide-content slide-${slide.id}`}>
              
              {/* 왼쪽 분리된 이미지 영역 */}
              <div className="left-images">
                <img src={slide.imgTopLeft} alt="상단 작은 이미지" className="img-top" />
                <img src={slide.imgCenterLeft} alt="중앙 배경 이미지" className='img-center' />
                <img src={slide.imgBottomLeft} alt="하단 작은 이미지" className="img-bottom" />
              </div>

              {/* 가운데 세로 텍스트 영역 */}
              <div className="t-wrap">
                <p className="main-txt">{slide.text1}</p>
                <p className="main-txt">{slide.text2}</p>
                <a href='#' className="badge">{slide.badge}</a>
              </div>

              {/* 오른쪽 메인 이미지 영역 */}
              <div className="right-images">
                <img src={slide.imgCenterRight} alt="우측 메인 배경 이미지" className='img-center-right'/>
                <img src={slide.imgRight} alt="오른쪽 메인 병 이미지" className='img-right-main'/>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero