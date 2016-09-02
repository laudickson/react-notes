import React from 'react';

const FolderName = props => {
  return(
    <li onClick={props.handleFolderClick}>
      {props.name}
    </li>
  );
};

export default FolderName;
