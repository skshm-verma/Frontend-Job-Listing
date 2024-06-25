import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import JobPage from './pages/JobPage'
import CreateJobPage from './pages/CreateJobPage';
import './App.css'
import EditJobPage from './pages/EditJobPage';

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [back, setBack] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage setCurrentUser={setCurrentUser} />} />
        <Route path='/register' element={<RegisterPage setCurrentUser={setCurrentUser} />} />
        <Route path='/' element={<HomePage currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/job/:id" element={<JobPage currentUser={currentUser} setCurrentUser={setCurrentUser} back={back} setBack={setBack} />} />
        <Route path="/create" element={<CreateJobPage />} />
        <Route path="/edit/:id" element={<EditJobPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
