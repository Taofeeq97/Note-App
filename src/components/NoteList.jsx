
import Note from "./Note"

const NoteList = ({notes, handleRemoveNote}) => {
    if (notes.length===0) {
        return (
            <p className="text-center text-grey-500">No Note added yet!</p>
        )
    }
    return (
        <div className="space-y-4">
            {notes.map((note)=> (
                <Note key={note.id} note={note} handleRemoveNote={handleRemoveNote} />
            ))}
        </div>
    )
}

export default NoteList