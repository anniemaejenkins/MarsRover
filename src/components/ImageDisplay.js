import React from 'react';

// dumb component
export default function ImageDisplay(props){
  return(
    <img src={props.image.img_src}/>
  );
}
