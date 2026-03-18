import { useState ,useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles/main.scss'
import Header from './components/Header'
import Hero from './sections/Hero'
import Footer from './components/Footer'
import Follow from './sections/Follow'
import Collection from './sections/Collection'
import Ingredient from './sections/Ingredient'
import News from './sections/News'
import Instargram from './sections/Instargram'
import TopBanner from './components/TopBanner'
import FixedTopBtn from './components/FixedTopBtn'
function App() {

  const [topBanner, setTopBanner]=useState('')
  const [isScrolled, setIsScrolled]=useState(false)


  useEffect(()=>{

    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });

    const handleScroll =()=>{
      const scrollTop=window.scrollY

      setIsScrolled(scrollTop>200)

      // console.log(scrollTop)
    }

    window.addEventListener('scroll',handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  },[])

  const upTopBanner =()=>{
    setTopBanner('up')
  }
  return (
    <div className={`app-container ${topBanner} ${isScrolled? 'scrolled':''} `}>
      <FixedTopBtn/>
      <TopBanner  onClick={upTopBanner}/>
      <Header />
      <main>
        <section id="hero" className='section'>
          <Hero />
        </section>
        <section id="follow" className='section'>
          <Follow />
        </section>
        <section id="collection" className='section'>
          <Collection />
        </section>
        <section id="ingredient" className='section'>
          <Ingredient />
        </section>
        <section id="news" className='section'>
          <News />
        </section>
        <section id="instargram" className='section'>
          <Instargram />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
