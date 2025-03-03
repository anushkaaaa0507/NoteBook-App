import React, { useState} from 'react';
function NoteForm({ addNote }) {
  const [title, setTitle]= useState('');
  const [description, setDescription] = useState('');
  const handleSubmit =(e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addNote ({ title, description });
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit}>
    <input 
           type="text"


  
           placeholder="Note Title"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
  />
             <textarea
  placeholder = "Note Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  />
    <button type="submit">Add To Book</button>
    </form>
  );
}
export default NoteForm;
