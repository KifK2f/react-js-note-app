function TodoRowItem(props) {
    return(
       <tr className="d-block mb-3 p-0">
      <td className="d-block p-0">
        <div className="card shadow-sm h-100" onClick={() => props.deleteTodo(props.rowNumber)}>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h5 className="card-title mb-0">{props.rowAssigned}</h5>
              <span className="badge bg-secondary">#{props.rowNumber}</span>
            </div>
            <p className="card-text white-space-pre-line mb-3">{props.rowDescription}</p>
            <div className="d-flex justify-content-end">
              <button 
                className="btn btn-sm btn-outline-danger"
                onClick={(e) => {
                  e.stopPropagation();
                  props.deleteTodo(props.rowNumber);
                }}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </td>
    </tr>
       
    )
}

export default TodoRowItem