import React from 'react';
import './about.scss';
class Slide4 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide4">
        <img className="pic4" src={require('./closeUp.jpg')} />
      </div>
    );
  }
}

export default Slide4;
