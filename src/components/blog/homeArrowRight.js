import React from 'react';
import './blog.scss';

class HomeRightArrow extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div onClick={this.props.nextSlide} className="nextArrow">
        <i id="rightArrow" className="fas fa-arrow-right"></i>
      </div>
    );
  }
}

export default HomeRightArrow;
