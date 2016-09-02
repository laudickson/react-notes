import React from 'react';
import FolderList from './FolderList';
import NoteList from './NoteList';

const data = {
  folders: [ {
      id: 1,
      name: 'Useful Regular Expressions',
      notes: []
    },
    {
      id: 2,
      name: 'App Ideas',
      notes: [1, 2, 3]
    }
  ],
  notes: [
    {
      id: 1,
      body: 'InstaWoof - Instagram for dogs',
      updatedAt: '2/1/16',
    },
    {
      id: 2,
      body: "Whiskr - it's like Tinder but for cats",
      updatedAt: '12/25/15',
    },
    {
      id: 3,
      body: 'Ka-Yak - travel site for yaks',
      updatedAt: '6/22/15',
    }

  ],
  selectedFolderId: 2,
  selectedNoteId: 2
};

let folders = [];
for (let folder of data.folders){
  folders.push({id: folder.id, name: folder.name})
}

let notes = [];
for (let note of data.notes){
  notes.push({id: note.id, body: note.body, date: note.updatedAt})
}

let addFolder =
  <div className="addFolder">
    <i className="fa fa-plus-circle" aria-hidden="true"></i>
    <form
      onSubmit={
        event =>{
          event.preventDefault();
          alert('Folder Created');
        }
      }
    >
      <input placeholder="New Folder" />
    </form>
  </div>

let middleHeader =
  <div className="header">
    <a href="#" className="button" onClick={event => alert('Note Created')}><i className="fa fa-sticky-note-o" aria-hidden="true"></i> New Note </a>
    <div className="search">
      <span className="fa fa-search"></span>
      <input placeholder="Search"/>
    </div>
  </div>

let rightHeader =
  <div className="header">
    <h6 className="updatedHeader">Updated At data</h6>
    <a href="#" className="button" onClick={event => alert('Note Updated')}>Update</a>
    <a href="#" className="button" onClick={event => alert('Note Deleted')}>Delete</a>
  </div>

let leftPanel =
  <div className="leftPanel">
    <FolderList folders={folders} handleFolderClick={event => alert('Folder was Clicked')} />
    {addFolder}
  </div>;

let middlePanel =
  <div className="middlePanel">
    {middleHeader}
    <NoteList notes={notes} handleNoteClick={event => alert('Note was Clicked')} />
  </div>;

let rightPanel =
  <div className="rightPanel">
    {rightHeader}
    <textarea></textarea>
  </div>;

const App = props => {
  return (
    <div className="main-app">
      {leftPanel}
      {middlePanel}
      {rightPanel}
    </div>
  );
};

export default App;
