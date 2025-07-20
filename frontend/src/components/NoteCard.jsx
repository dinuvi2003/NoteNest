import { Link, PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { formatDate } from '../libs/utils'
import api from '../libs/axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'

const NoteCard = ({note,setNotes}) => {

  const navigate = useNavigate();

  const handleDelete = async(e,id) => {
    e.preventDefault();

    if(!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`)
      setNotes((prev) => prev.filter(note => note._id !== id))
      toast.success("Note deleted successfully")
    } catch(error) {
      console.log("Error in handleDelete")
      toast.error("Failed to delete note")
    }
  }

  return (
    <div
      className='cursor-pointer card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]'
      onClick={() => navigate(`/note/${note._id}`)}
    >
        <div className='card-body'>
            <h3 className='card-title text-base-content'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
            <div className='card-actions justify-between items-center mt-4'>
                <span className='text-sm text-base-content/60'>
                    {formatDate(new Date(note.createdAt))}
                </span>
                <div className='flex items-center gap-1'>
                    <PenSquareIcon className='size-4'/>
                    <button className='btn btn-ghost btn-xs text-error' onClick={(e) => handleDelete(e,note._id)}>
                        <Trash2Icon className='size-4'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NoteCard