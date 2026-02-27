// util/follow.js
const img = (path) => `/img/${path}`;

export const followData = {
  collage: [
    { 
      id: 1, 
      className: "item1", 
      src: img("follow-omija.png"), 
      alt: "오미자",
      aos: "fade-down-right", 
      aosDelay: "50" 
    },
    { 
      id: 2, 
      className: "item2", 
      src: img("follow-licorice.png"), 
      alt: "감초",
      aos: "fade-down", 
      aosDelay: "70"
    },
    { 
      id: 3, 
      className: "item3", 
      src: img("follow-bark.png"), 
      alt: "나무껍질",
      aos: "fade-down-left", 
      aosDelay: "90"
    },
    { 
      id: 4, 
      className: "item4", 
      src: img("follow-rice.png"), 
      alt: "쌀숭이",
      aos: "fade-up-right", 
      aosDelay: "110"
    },
    { 
      id: 5, 
      className: "item5", 
      src: img("follow-gugija.png"), 
      alt: "말린 구기자",
      aos: "fade-up-left", 
      aosDelay: "13"
    },
  ],
  
  textInfo: {
    title: "다양성이 완성한 합의 미학",
    desc: "쌀과 누룩 그리고 사철 재료가 한데 합쳐져 맛을 완성합니다.<br/>쌀과 누룩의 고소함, 오미자의 산뜻한 오미, 산사자, 산수유의 과실<br/>풍미는 발효 과정에서 자연스럽게 생기는 산미와 향취를 만나 깊이<br/>있는 맛의 향연을 만들어냅니다.",
    btnLabel: "MEET HERITAGE",
    btnLink: "#meet-heritage"
  }
};