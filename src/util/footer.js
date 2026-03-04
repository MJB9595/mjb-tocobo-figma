// src/util/footer.js
const img = (path) => `/img/${path}`;
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

// 로고
export const logoData = {
  src: img("logo.svg"),
  alt: "백세주 로고",
  href: "/",
};

// 회사 정보
export const companyData = [
  "주식회사 XX | 대표 : XXX",
  "주소 : 0XX6X 마고특별시 산나비 5길 45 (신수동)",
  "사업자등록번호 : 323-5499-4771  [사업자정보확인]",
  "통신판매업신고 : 제2037-마고특별-6294호 개인정보보호책임자 : XXX",
  "TEL : 05 - 8372 - 9520 | E-MAIL : help@beckseju.com",
  "마케팅문의 : 마케팅팀 mkt@bekseju.com",
  "수출문의 : 해외영업팀 sales1@bekseju.com",
  "특판&대량구매문의 : 국내영업팀 sales@bekseju.com",
];
export const footerLegal = {
  copyright: "COPYRIGHT© 주식회사 MAGO 2026 BEKSEJU ALL RIGHT RESERVED.",
  links: [
    { label: "이용약관", href: "/terms" },
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용안내", href: "/guide" }
  ]
};
// 고객센터
export const customerCenterData = {
  title: "Customer Center",
  tel: { value: "03-2214-3322", href: "tel:0263522410" },
  hours: "AM 10:00 - PM 5:00 (Lunch 12:00 - 13:00)",
  notice: "토, 일요일 및 공휴일 휴무",
  talk: { label: "1:1 TALK", href: "#" },
};

// 메뉴
export const footerMenus = [
  {
    title: "STORY",
    items: [
      { label: "History", href: "/brand-story" },
      { label: "Provenience", href: "/collection" },
    ],
  },
  {
    title: "CRAFT",
    items: [
      { label: "All Product", href: "/shop" },
      { label: "Ingredient", href: "/shop/makeup" },
    ],
  },
  {
    title: "TASTE",
    items: [{ label: "Reviews", href: "/promotion" }],
  },
  {
    title: "NEWS",
    items: [
      { label: "Notice", href: "/notice" },
      { label: "FAQ", href: "/faq" },
      { label: "1:1 CS", href: "/cs" },
    ],
  },
];

export const socialLinks = [
  {
    id: "kakao",
    label: "KakaoTalk 채널",
    href: "https://pf.kakao.com/your-channel",
    icon: RiKakaoTalkFill
  },
  {
    id: "instagram",
    abel: "Instagram",
    href: "https://www.instagram.com/your-instagram",
    icon: FaInstagramSquare
  },
  {
    id: "youtube", 
    label: "YouTube",
    href: "https://www.youtube.com/@your-youtube",
    icon: FaYoutube
  },
];
