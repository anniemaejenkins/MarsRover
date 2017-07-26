import React from 'react';

// dumb component
export default function GetImageButton(props){
  return(
    <div>
      <input type="submit" onClick={props.onClick}/>
    </div>
  );
}
