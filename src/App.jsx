import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  return (
    <>
      <div className='w-full h-full absolute top-0 left-0 z-50 pointer-events-none bg-repeat opacity-25' style={{backgroundImage: "url(./media/images/noise.png)"}}></div>
      <Header />
      <Main />
    </>
  )
}

export default App
