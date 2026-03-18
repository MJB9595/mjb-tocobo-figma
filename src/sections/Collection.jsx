import React, { useRef, useEffect } from 'react'
import { collectionData } from '../util/collection'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import { Navigation, Pagination } from 'swiper/modules'; 
import './styles/Collection.scss'

const Collection = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current
      swiperRef.current.params.navigation.nextEl = nextRef.current
      swiperRef.current.navigation.destroy()
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }
  }, [])

  return (
    <div className='inner collection-inner'>
      
      <div className="t-wrap">
        <h2 className="tit">Tasting Note</h2>
        <p className="txt">백세주 테이스팅 노트</p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          781: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
        loop={true}
        pagination={{ clickable: true }} 
        modules={[Navigation, Pagination]} 
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="collection-slider"
      >
        {collectionData.map((sl, i) => (
          <SwiperSlide key={i}>
            <div className="tasting-card">
              
              <div className="card-header">
                <h3 className="quote">"{sl.title}"</h3>
                <span className="divider"></span>
                <p className="author">{sl.name}</p>
              </div>

              <div className="img-wrap">
                <img src={sl.image} alt={sl.name} />
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <a href="#" className='prev' onClick={(e)=>e.preventDefault()} ref={prevRef}>prev</a>
      <a href="#" className='next' onClick={(e)=>e.preventDefault()} ref={nextRef}>next</a>

    </div>
  )
}

export default Collection