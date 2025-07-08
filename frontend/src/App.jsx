import React from 'react'
import { Routes, Route } from 'react-router'
import toast from 'react-hot-toast'

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetails from './pages/NoteDetails'


const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/note/:id" element={<NoteDetails/>}/>
      </Routes>
    </div>
  )
}

export default App