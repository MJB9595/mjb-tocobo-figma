import React from 'react'
import './styles/Ingredient.scss'

const Ingredient = () => {
  return (
    <div className='ingredient-wrap'>
      <div className="bg-band"></div>

      <div className="ingredient-content" data-aos="fade-up">
        
        <div className="left-images">
          <img src="/img/ing_red.png" alt="원재료" className="img-red" data-aos="fade-right" data-aos-delay="200" />
          <img src="/img/ing_nuruk.png" alt="누룩" className="img-nuruk" data-aos="fade-up" data-aos-delay="400" />
        </div>

        <div className="center-text">
          <div className="t-block t-top" data-aos="fade-down" data-aos-delay="300">
            <p>국순당</p>
            <p>계승한</p>
          </div>
          <div className="t-block t-bottom" data-aos="fade-up" data-aos-delay="500">
            <p>발효기술로</p>
            <p>누룩</p>
          </div>
        </div>

        <div className="right-images">
          <img src="/img/ing_texture_bg.png" alt="배경 텍스처" className="img-bg-texture" data-aos="fade-left" data-aos-delay="300" />
          <img src="/img/ing_bottle.png" alt="강장 백세주" className="img-bottle" data-aos="zoom-in" data-aos-delay="600" />
        </div>

      </div>
    </div>
  )
}

export default Ingredient