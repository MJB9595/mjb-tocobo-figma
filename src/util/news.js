const img = (path) => `/img/${path}`;

export const newsImages = {
  bgBrush: img("news-brush.png"),
  bottleLight: img("news-bottle-1.png"),
  bottleDark: img("news-bottle-2.png"),
  rice: img("news-rice.png")
};

export const newsData = [
  {
    id: 1,
    title: "백세주 이야기",
    subtitle: "한국이 만들어낸 고유한 전통의 맛",
    desc: "백하국으로 자아낸 한국만의 누룩은 그 자체만으로<br/>한국의 전통을 잇는 풍성한 맛을 보여주며<br/>기술의 힘에도 재현하기 힘든 그맛은 지금도 손으로 빚고<br/>햇빛에 말려 그 풍요한 맛을 이어가고 있습니다",
    contact: "example@example/ 267742786***"
  },
  {
    id: 2,
    title: "자연의 선물",
    subtitle: "좋은 재료가 빚어내는 깊은 풍미",
    desc: "엄선된 쌀과 맑은 물, 그리고 사철의 기운을 머금은<br/>다양한 약재들이 조화롭게 어우러져<br/>오랜 시간 숙성된 깊고 풍부한 맛을 선사합니다.",
    contact: "example@example/ 267742786***"
  },
  {
    id: 3,
    title: "장인의 손길",
    subtitle: "시간과 정성으로 완성되는 가치",
    desc: "수십 번의 손길과 기다림의 미학을 통해<br/>한 병의 백세주가 탄생합니다.<br/>전통 방식 그대로, 변치 않는 정성을 담아냅니다.",
    contact: "example@example/ 267742786***"
  }
];