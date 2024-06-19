import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import JobPage from './pages/JobPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/' element={<HomePage/>}/>
        <Route path="/job/:id" element={<JobPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
