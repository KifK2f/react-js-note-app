import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteTable from './components/NoteTable';

function App() {


  

  const [showAddNoteForm, setShowAddNoteForm] = useState(false);

   const [notes, setNotes] = useState([
    
  ]
)

  const addNote = (description, assigned) => {
    let rowNumber = 0;
    if (notes.length > 0){
      rowNumber = notes[notes.length - 1].rowNumber + 1; //rowNumber = Notes[Notes.length - 1] Assigner la derniere valeur du tableau a cette variable
    } else {
      rowNumber = 1;
    }  
      const newNote = {
        // rowNumber: Notes.length + 1,
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      // Notes.push(newNote);
      setNotes(notes => [...notes, newNote])
      // console.log(Notes);
      alert('Tâche ajouté avec succes ')
  }


  const deleteNote = (deleteNoteRowNumber) => {
    let filtered = notes.filter(function (value) {
      return value.rowNumber !== deleteNoteRowNumber;
    });
    setNotes(filtered);
  }


  return (
    <div className ="container mt-4">
      <h1 className ="mt-5" style={{color: 'white'}}>Application de Gestion de Notes (Notes App) </h1>

      <div className='card shadow-sm mb-4'>
        <div className='card-header text-white p-3' style={{backgroundColor: 'rgb(239, 83, 35)'}}> 
          <h2 style={{color: 'white'}}>Vos nôtes</h2>
        </div>
        <div className='card-body'>
          <NoteTable notes={notes} deleteNote={deleteNote} />
          <button onClick={() => setShowAddNoteForm(!showAddNoteForm)} className='btn text-white' style={{backgroundColor: 'rgb(239, 83, 35)'}}>
          {showAddNoteForm? 'Fermer Nouvelle note' : 'Nouvelle note'}
            </button>
           {showAddNoteForm &&
          <NoteForm addNote={addNote}/>
          }
        </div>
      </div>    
    </div>
  );
}

export default App;
