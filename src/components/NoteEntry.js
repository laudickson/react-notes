import React from 'react';

const NoteEntry = props => {
  return(
    <div className="noteEntry" onClick={props.handleNoteClick}>
      <h6>{props.name}</h6>
      <span>{props.date}</span>
    </div>
  );
};

export default NoteEntry;
