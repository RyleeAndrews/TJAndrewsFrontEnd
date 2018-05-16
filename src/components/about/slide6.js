import React from 'react';
import './about.scss';
class Slide6 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide6">
        <img className="pic6" src={require('./dive.jpg')} />
      </div>
    );
  }
}

export default Slide6;
