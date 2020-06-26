import React from 'react';
import './styles.css'

const CreateNote = () => {
    return (
        <div>
            <form className='create'>
                <input 
                    name='title'
                    placeholder='Note title'
                    spellCheck='false'
                />
                <textarea 
                    name='details'
                    placeholder='Write your note here...'
                    rows='4'
                    spellCheck='false'
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateNote;
