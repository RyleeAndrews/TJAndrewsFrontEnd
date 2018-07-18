import React from 'react';
import Header from '../header/header.js';
import './headertab.scss';
class Sponsers extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div>
        <Header />
        <p className="thanks"> A very huge thank you to all my sponsers
        without you none of what I do is even possible to achieve. Thank you to
        these fine companies
        </p>
        <div className="sponserImg">
          <img className="zapata" src={require('./zapata.png')} />
          <img className="tsd" src={require('./Total-Screen.jpg')} />
          <img className="gull" src={require('./gull.jpg')} />
          <img className="gnpg" src={require('./GNPG.jpg')} />
        </div>
      </div>
    );
  }
}

export default Sponsers;
