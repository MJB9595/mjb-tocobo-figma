import React from 'react';
import './styles/Follow.scss';
import { followData } from '../util/follow';

const Follow = () => {
  return (
    <section className="follow-wrap">
      <div className="inner follow-inner">
        
        <div className="left-collage">
          {followData.collage.map((item) => (
            <div 
              key={item.id} 
              className={`grid-item ${item.className}`}
              data-aos={item.aos} 
              data-aos-delay={item.aosDelay}
              data-aos-duration="1000"
              data-aos-once="false"
            >
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>

        <div className="right-text" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
          <h2 className="tit">{followData.textInfo.title}</h2>
          
          <p 
            className="desc"
            dangerouslySetInnerHTML={{ __html: followData.textInfo.desc }}
          />
          
          <a href={followData.textInfo.btnLink} className="btn-meet">
            {followData.textInfo.btnLabel}
          </a>
        </div>

      </div>
    </section>
  )
}

export default Follow;