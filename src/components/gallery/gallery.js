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
      </div>
    );
  }
}

export default Gallery;
