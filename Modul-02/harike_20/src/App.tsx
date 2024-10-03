import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Register from './components/register'
import './App.css'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
