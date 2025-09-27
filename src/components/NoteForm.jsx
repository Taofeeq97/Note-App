import { useState } from "react"
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextArea from "./inputs/TextArea";

const NoteForm = ({notes, setNotes}) => {

    // const [title, setTitle] = useState('')
    // const [priority, setPriority] = useState('Medium')
    // const [category, setCategory] = useState('Work')
    // const [description, setDescription] = useState('')

    const [formdata, setFormData] = useState({
        title: '',
        category: 'Work',
        priority: 'Medium',
        description: ''

    })

    const [isFormOpen, setIsFormOpen] =useState(false);

    const handleChange = (e) => {
            setFormData({
                ...formdata,
                [e.target.name] : e.target.value
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formdata.title || !formdata.description) return

        const newNote = {id: Date.now(), ...formdata};

        setNotes([newNote, ...notes])
        setFormData({
            title: '',
            category: 'Work',
            priority: 'Medium',
            description: ''
        })
        setIsFormOpen(false)

    }

    return (
        <>
        <button 
        onClick={() => setIsFormOpen(!isFormOpen)}
        className="w-full bg-grey-100 border border-grey-300
         text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200
          hover:border-purple-300 transition mb-4">
            {isFormOpen ? 'Hide form' : 'Add New Note'}
        </button>
        { isFormOpen &&
        <form className="mb-6" onSubmit={handleSubmit}>
            <TextInput 
                label="Title" 
                name="title" 
                value={formdata.title} 
                onChange={handleChange} 
                required 
                
            />
            <SelectInput 
                label="Priority"
                name='priority'
                value={formdata.priority}
                onChange={handleChange}
                options_values={[
                    {value: "High", label: "High"},
                    {value: "Medium", label: "Medium"},
                    {value: "Low", label: "Low"}
            ]}
            />

            <SelectInput 
                label="Category"
                name='category'
                value={formdata.category}
                onChange={handleChange}
                options_values={[
                    {value: "Work", label: "Work"},
                    {value: "Personal", label: "Personal"},
                    {value: "Idea", label: "Idea"}
            ]}
              />
            
            <TextArea 
                name='description'
                label='Description'
                value={formdata.description}
                onChange={handleChange}
                required
            />
            <button className="w-full bg-purple-500 rounded-lg text-white py-2 cursor-pointer hover:bg-purple-900">Add Note</button>
        </form>
}

        </>
    )
}

export default NoteForm