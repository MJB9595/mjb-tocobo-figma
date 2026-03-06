import React from 'react'
import { Swiper, SwiperSlide} from "swiper/react"
import insta from '../util/insta'
import "swiper/css"
import './styles/Instargram.scss'

const Instargram = () => {
  return (
    <div className='inner instar-inner'>
      <div className="t-wrap">
        <h2 className="tit">
          Instagram
        </h2>
          <p className="txt">
            @bekseju_official
          </p>
      </div>
          <ul className="instar-list">
            <li>
              <Swiper
              slidesPerView={3}
              spaceBetween={10}
              breakpoints={{
                1024: { slidesPerView: 6 }
              }}
              className='insta-slider'
              >
                {insta.map((is)=>(

                  <SwiperSlide
                  style={{backgroundImage:`url(${is.image})`}}
                  key={is.id}>
                    <a href={is.link} className='insta-link'>
                      {is.id}
                    </a>

                  </SwiperSlide>

                ))}
              </Swiper>

            </li>
          </ul>
    </div>
  )
}

export default Instargram