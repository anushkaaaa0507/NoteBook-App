import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import SearchBar from './SearchBar';
function App(){
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');
  const addNote = (note)=>{
    setNotes([...notes, note]);
  };
  const filteredNotes = notes.filter(note=>note.title.toLowerCase().includes(search.toLowerCase())
                                     );
  return{
    <div className="container">
    <h1>NoteBook</h1>
  <SearchBar search={search} setSearch={setSearch}/>
  <p>Total Notes: {notes.length}</p>
  <p>Showing: {filteredNotes.length}</p>
  <NoteForm addNote={addNote} />
    <NoteList notes={filteredNotes} />
    </div>
  );
}
export default App;
    
    
