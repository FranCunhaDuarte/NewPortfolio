import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Lenis from 'lenis'

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
      lerp: 0.08
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <div className='w-full h-full absolute top-0 left-0 z-50 pointer-events-none bg-repeat opacity-15' style={{backgroundImage: "url(./media/images/noise.png)"}}></div>
      <Header />
      <Main />
    </>
  )
}

export default App
