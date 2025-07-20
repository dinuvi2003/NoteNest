import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import NoteCard from '../components/NoteCard'
import NotesNotFound from '../components/NotesNotFound'

const HomePage = () => {
  const [notes,setNotes] = useState([])
  const [loading,setLoading] = useState(true)  

  useEffect(() => {
    const fetchNotes = async() => {
        try {
            const res = await axios.get("http://localhost:5001/api/notes")
            // console.log(res.data)
            setNotes(res.data)
        }
        catch(error) {
            console.log("Error fetching data")
        }
    }

    fetchNotes();
  },[])

  return (
    <div className='min-h-screen'>
        <Navbar/>

        <div className='max-w-7xl mx-auto p-4 mt-6'>
          {notes.length == 0 && <NotesNotFound/>}

          {notes.length > 0 && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {notes.map((note) => (
                <NoteCard key={note._id} note={note} setNotes={setNotes}/>
              ))}
            </div>
          )}
        </div>
    </div>
  )
}

export default HomePage