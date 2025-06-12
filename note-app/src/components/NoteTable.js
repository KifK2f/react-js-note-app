import NoteRowItem from "./NoteRowItem";

function NoteTable(props){
    return(
        <table className='table table-hover'>
            <tbody>

                {props.notes.map(note =>(
                    <NoteRowItem
              key={note.rowNumber}
              rowNumber={note.rowNumber}
              rowDescription={note.rowDescription}
              rowAssigned={note.rowAssigned}
              deleteNote={props.deleteNote}
              />                  
                ))}

             
              
            </tbody>
          </table>
    )
}

export default NoteTable;