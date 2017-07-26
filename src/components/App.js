import React, { Component } from 'react';

import './../styles/App.css';

// import components
import GetImageForm from './GetImageForm.js';



class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <GetImageForm />
      </div>
    );
  }
}




export default App;
