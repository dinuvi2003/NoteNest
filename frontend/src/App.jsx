import React from 'react'
import { Routes, Route } from 'react-router'
import toast from 'react-hot-toast'

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetails from './pages/NoteDetails'


const App = () => {
  return (
    <div className='realtive h-full w-full'>
      <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%/_10%,#000_60%,#00FF9D40_100%)]'/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/note/:id" element={<NoteDetails/>}/>
      </Routes>
    </div>
  )
}

export default App