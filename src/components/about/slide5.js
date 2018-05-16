import React from 'react';
import './about.scss';
class Slide5 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide5">
        <img className="pic5" src={require('./drone.jpg')} />
      </div>
    );
  }
}

export default Slide5;
