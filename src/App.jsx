import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Intro from './pages/Intro'

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/calculator" element={<Home/>}/>
        <Route exact path="/" element={<Intro/>}/>
      </Routes>
    </>
  )
}

export default App
