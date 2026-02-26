
const img = (path) => `/img/${path}`

export const headerData = {

    logo: {
        src: img('logo.svg'),
        alt: '백세주',
        href: '/'
    },
    menus: [
        {
            id: 'hero',
            label: 'STORY',
            href: '#hero',
            type: 'section'
        },
        {
            id: 'follow',
            label: 'CRAFT',
            href: '#follow',
            type: 'section'
        },
        {
            id: 'collection',
            label: 'TASTE',
            href: '#collection',
            type: 'section'
        },
        {
            id: 'skincare',
            label: 'NEWS',
            href: '#skincare',
            type: 'section'
        },
        {
            id: 'instargram',
            label: 'INSTARGRAM',
            href: '#instargram',
            type: 'section'
        },
    ],
    utils: [
        { id: "search", label: "검색", icon: img("icon_search.svg"), href: "#" },
        { id: "account", label: "마이", icon: img("icon_myp.svg"), href: "#" },
        { id: "cart", label: "장바", icon: img("icon_cart.svg"), href: "#" },
    ],
    // 상단 공지/배너 (TopBanner용)
    topBanner: {
        enabled: true,
        height: 64,                   // px
        items: [
            { id: "tb-1", text: "새로운 소식이 있습니다.", href: "#" },
            { id: "tb-2", text: "업데이트 안내", href: "#" },
            { id: "tb-3", text: "정취를 빚어내는 여정", href: "#" },
        ],
        closeIcon: img("icon_pop_close_b.png"),
        background: "#DC272D",
        color: "#fff",
    },
}