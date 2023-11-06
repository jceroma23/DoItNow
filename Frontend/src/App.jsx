import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RequireAuth } from "react-auth-kit"; //Not yet implemented.



// Pages
import LoginPage from './pages/LoginPage'
import HomePage from './pages/homePage'
import BoardPage from './pages/boardPage';
import TaskPage from './pages/taskPage';
import VerifyPage from './pages/verifyPage';




function App() {
  const [ sample, SetSample ] = useState(false)


  if (sample === true) {
    return (
      <>
        <div className='bg-stone-800 text-center text-9xl'>
          <h1>Loader</h1>
          <h2>This true</h2>
        </div>
      </>
    )
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/board' element={<BoardPage/>} />
          <Route path='/todo' element={<TaskPage/>} />
          <Route path='/user/verify/:userId/:EmailToken' element={<VerifyPage/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
