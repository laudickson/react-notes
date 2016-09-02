import React from 'react';
import NoteEntry from './NoteEntry';

const NoteList = props => {
  let notes = props.notes.map(note => {
    return(
      <NoteEntry
        key={note.id}
        name={note.body}
        date={note.date}
        handleNoteClick={props.handleNoteClick}
        className="noteEntry"
      />
    );
  });

  return(
    <div className="noteList">
      {notes}
    </div>
  );
};

export default NoteList;
