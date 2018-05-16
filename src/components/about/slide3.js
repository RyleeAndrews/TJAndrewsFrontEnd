import React from 'react';
import './about.scss';
class Slide3 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide3">
        <img className="pic3" src={require('./1st.jpg')} />
      </div>
    );
  }
}

export default Slide3;
