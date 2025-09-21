import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomeMain'
import Lenis from 'lenis'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import ProjectList from './components/ProjectList'
import HomeLayout from './pages/HomeMain'
import HomeMain from './pages/HomeMain'
import AboutMe from './components/AboutMe'

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
      <Routes>

        {/* Home Page */}
        <Route path='/' element={<HomeLayout />} >
          <Route index element={<ProjectList />} />
          <Route path='projects' element={<ProjectList />} />
          <Route path='aboutme' element={<AboutMe />} />
        </Route>

        {/* Not Found Page */}
        <Route path='*' element={<NotFoundPage />} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
