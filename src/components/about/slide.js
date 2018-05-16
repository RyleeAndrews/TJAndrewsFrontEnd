import React from 'react';
import './about.scss';
class Slide1 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide1">
        <img className="pic1" src={require('./slide1.jpg')} />
      </div>
    );
  }
}

export default Slide1;
