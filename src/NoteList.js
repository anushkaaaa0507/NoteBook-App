import React from 'react';
function NoteList({ notes }){
  return (
    <div>
    {notes.length === 0 ? <p>No notes available.</p> : null}
  {notes.map((note, index) => (
    <div key={index} className"note">
    <h2>{note.title}</h2>
   <p>{note.description}</p>
    </div>
   ))}
  </div>
  );
}
export default NoteList;
