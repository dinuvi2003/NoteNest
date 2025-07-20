import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router'
import toast, { LoaderIcon } from 'react-hot-toast'

const NoteDetails = () => {

  const [note,setNotes] = useState(null);
  const [loading,setLoading] = useState(true);
  const [saving,setSaving] = useState(false);

  const navigate = useNavigate()

  const {id} = useParams()

  useEffect(() => {
    const fetchNote = async() => {
      try {
        const res = await api.get(`/notes/${id}`)
        setNotes(res.data)
      } catch(error) {
        console.log("Error in fetching note",error)
        toast.error("Failed to fetch the note")
      }

    }
    fetchNote();
  }, {id});

  const handleDelete = () => {

  }

  if(loading) {
    return(
      <div className='min-h-screen bg-base-200 flex items-center justify-center'>
        <LoaderIcon className='animate-spin size-10'/>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
        <div className='flex items-center justify-between mb-6'>
          <Link to="/" className='btn btn-ghost'>
            <ArrowLeftIcon className='h-5 w-5'/>
            Back to Notes
          </Link>
          <button onClick={handleDelete} className='btn btn-error btn-outline'>
            <Trash2Icon className='h-5 w-5'/>
            Delete Note
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetails