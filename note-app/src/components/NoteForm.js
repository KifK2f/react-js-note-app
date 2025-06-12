const { useState, useEffect } = require("react");

function NoteForm(props){

    const storedTitle = JSON.parse(localStorage.getItem('title'))
    const storedContent = JSON.parse(localStorage.getItem('content'))


    const [content, setContent] = useState(storedContent);
    const [title, setTitle] = useState(storedTitle);

    useEffect(() => {
        localStorage.setItem('title', JSON.stringify(title))
        console.log(storedTitle)
    }, [title] )

    useEffect(() => {
        localStorage.setItem('content', JSON.stringify(content))
        console.log(storedContent)
    }, [content] )

    

    const submitNote = () => {
        if (content !=='' && title !=='' ){
            props.addNote(content, title);
            setContent('');
            setTitle('');
        }
    }

    return(
        <div className='mt-5'>
            <form>
            <div className='mb-3'>
                <label className='form-label'>Titre</label>
                <input type="text" className='form-control' required onChange={e => setTitle(e.target.value)} value={title}></input>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Contenu</label>
                <textarea 
                className='form-control' 
                rows={3} 
                required 
                onChange={e =>setContent(e.target.value)}
                value={content} 
                ></textarea>
                {/* <textarea className='form-control' rows={3} required onChange={descriptionChange} value={description}></textarea> */}
            </div>
            <button type="button" className='btn mt-3 text-white' style={{backgroundColor: 'rgb(239, 83, 35)'}} onClick={submitNote}>Ajouter une tâche</button>
            
            </form>

        </div>
    )

}
export default NoteForm;