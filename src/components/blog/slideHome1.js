import React from 'react';
import './blog.scss';
class SlideHome1 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slideHome1">
        <iframe className="vid1"
          width="560" height="315" src="https://www.youtube.com/embed/wQv7AoJAg5A"
          frameBorder="0" allow="autoplay; encrypted-media" allowFullscreen></iframe>
      </div>
    );
  }
}

export default SlideHome1;
