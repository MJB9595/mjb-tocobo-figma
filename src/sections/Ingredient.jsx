import React from 'react'
import './styles/Ingredient.scss'

const Ingredient = () => {
  return (
    <div className='ingredient-wrap'>
      {/* 전체 배경을 가로지르는 미세한 텍스처 띠가 있다면 
        아래 bg-band에 이미지를 넣어주세요. (선택사항) 
      */}
      <div className="bg-band"></div>

      <div className="ingredient-content" data-aos="fade-up">
        
        {/* 왼쪽: 재료 이미지 영역 (빨간 열매, 누룩) */}
        <div className="left-images">
          <img src="/img/ing_red.png" alt="원재료" className="img-red" data-aos="fade-right" data-aos-delay="200" />
          <img src="/img/ing_nuruk.png" alt="누룩" className="img-nuruk" data-aos="fade-up" data-aos-delay="400" />
        </div>

        {/* 중앙: 세로 텍스트 영역 */}
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

        {/* 오른쪽: 메인 텍스처 배경 및 병 이미지 영역 */}
        <div className="right-images">
          <img src="/img/ing_texture_bg.png" alt="배경 텍스처" className="img-bg-texture" data-aos="fade-left" data-aos-delay="300" />
          <img src="/img/ing_bottle.png" alt="강장 백세주" className="img-bottle" data-aos="zoom-in" data-aos-delay="600" />
        </div>

      </div>
    </div>
  )
}

export default Ingredient