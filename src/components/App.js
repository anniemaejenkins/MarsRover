import React, { Component } from 'react';
import logo from './../logo.svg';
import './../styles/App.css';

const API_KEY = 'I55DSyUefgZ0HCHNpqhBWwipw1fitpPxdq65jJOE';
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'
//const imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      camera: "",
      rover: "",
      number: "",
      images: []
    };
  }

  // componentDidMount() {
  //   //let imageUrl = `${BASE_URL}${this.state.rover}/photos?sol=${this.state.number}&camera=${this.state.camera}&api_key=${API_KEY}`
  // }
  render() {
    return (
      <div>

      </div>
    );
  }
}

// componentDidMount(){
//   // fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/')
//   // .then((result) => {
//   //   result.json().then((response) => {
//   //
//   //   });
//   // });
// }


export default App;
