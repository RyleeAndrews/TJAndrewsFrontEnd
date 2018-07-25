import React from 'react';
import Header from '../header/header.js';
import './gallery.scss';

class Gallery extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="galleryContainer">
        <Header/>
        <img className="gallery" src={require('./gallery1.jpg')} />
        <img className="gallery" src={require('./gallery4.jpg')} />
        <img className="gallery" src={require('./gallery5.jpg')} />
        <img className="gallery" src={require('./gallery6.jpg')} />
        <img className="gallery" src={require('./gallery8.jpg')} />
        <img className="gallery" src={require('./gallery9.jpg')} />
        <img className="gallery" src={require('./gallery10.jpg')} />
        <img className="gallery" src={require('./gallery11.jpg')} />
        <img className="gallery" src={require('./gallery13.jpg')} />
        <img className="gallery" src={require('./gallery14.jpg')} />
        <img className="gallery" src={require('./gallery15.jpg')} />
        <img className="gallery" src={require('./gallery16.jpg')} />
      </div>
    );
  }
}

export default Gallery;
