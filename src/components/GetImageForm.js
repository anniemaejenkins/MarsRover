import React, {Component} from 'react';

// import dumb components
import ImageDisplay from './ImageDisplay.js';
import GetImageButton from './GetImageButton.js';

const API_KEY = 'I55DSyUefgZ0HCHNpqhBWwipw1fitpPxdq65jJOE';
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';



// smart component

export default class GetImageForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      camera: "",
      rover: "",
      sol: "",
      images: []
    };
    // bind the custom methods
    this._handleRover = this._handleRover.bind(this);
    this._handleCamera = this._handleCamera.bind(this);
    this._handleSol = this._handleSol.bind(this);
    this._fetchRoverImage = this._fetchRoverImage.bind(this);
  }


// custom methods that are attached to the form
_handleRover(event){
  this.setState({
    rover: event.target.value
  });
}
_handleCamera(event){
  this.setState({
    camera: event.target.value
  });
}
_handleSol(event){
  this.setState({
    sol: event.target.value
  });
}
_fetchRoverImage(event){
  event.preventDefault();
  const imageUrl = `${BASE_URL}${this.state.rover}/photos?sol=${this.state.sol}&camera=${this.state.camera}&api_key=${API_KEY}`;
    fetch(imageUrl)
    .then(response => response.json())
    .then((json) => {
      this.setState({
        images: json.photos
      });
    });
  }


  render(){
    let images = this.state.images.map((image, index)=>{
    return <ImageDisplay key={index} image={image} />
  })
    console.log(this.state.images)
    return(
      <div className='container'>
        <form className='form-horizontal'>
          <div className="form-group">
          <label htmlFor="rover">Rover</label>
          <select onChange={this._handleRover} id="rover" className="form-control" value={this.state.rover}>
            <option value='select'>Select Rover</option>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>
          </div>
          <div className="form-group">
          <label htmlFor="camera">Camera Type</label>
          <select onChange={this._handleCamera} id="rover" value={this.state.camera}>
            <option value='select'>Select Camera</option>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          </div>
          <div className="form-group">
            <label htmlFor="sol">Martian Sol: 1000-2000</label>
            <input type="number" onChange={this._handleSol} max="2000" min="1000" />
          </div>
            <GetImageButton onClick={this._fetchRoverImage}/>
        </form>

        <div className="center-block">
          {images}
        </div>

      </div>
    );
  }
}
