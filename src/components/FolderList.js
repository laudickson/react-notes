import React from 'react';
import FolderName from './FolderName';

const FolderList = props => {
  let folders = props.folders.map(folder => {
    return(
      <FolderName
        key={folder.id}
        name={folder.name}
        handleFolderClick={props.handleFolderClick}
      />
    );
  });

  return(
    <ul>
      {folders}
    </ul>
  );
};

export default FolderList;
