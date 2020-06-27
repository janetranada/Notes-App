import React, {useState} from 'react';
import './styles.css'

const CreateNote = (props) => {
    const { handleAdd } = props;

    const [note, setNote] = useState({
        title: '',
        details: '',
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setNote(prevNote => ({...prevNote, [name]: value}));
    }

    const handleSubmit = (event) => {
        handleAdd(note);
        setNote({
            title: '',
            details: ''
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className='create'>
                <input 
                    name='title'
                    placeholder='Note title'
                    spellCheck='false'
                    value={note.title}
                    onChange={handleInputChange}
                />
                <textarea 
                    name='details'
                    placeholder='Write your note here...'
                    rows='4'
                    spellCheck='false'
                    value={note.details}
                    onChange={handleInputChange}
                />
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
}

export default CreateNote;