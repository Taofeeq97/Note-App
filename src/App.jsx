import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";


function App() {
  const [notes, setNotes] =useState([])

  const handleRemoveNote = (noteId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?")
    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== noteId))
    }
      
  }


  return (
    <div className="max-w-lg mx-auto mt-10 p-6 rounded-lg shadow-lg bg-gray-200">
    <h2 className="text-3xl font-bold mb4 text-center"> 📝 Note App</h2>

    <NoteForm notes={notes} setNotes={setNotes} />
    <NoteList notes={notes} handleRemoveNote={handleRemoveNote} />
    </div>
  )
}

export default App;