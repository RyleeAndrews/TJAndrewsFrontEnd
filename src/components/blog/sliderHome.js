import React from 'react';
import SlideHome1 from './slideHome1.js';
import SlideHome2 from './slideHome2.js';
import LeftArrow from './homeArrowLeft.js';
import RightArrow from './homeArrowRight.js';
import './blog.scss';

class SliderHome extends React.Component {
  constructor(props) {
    super(props);

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.state = {
      slideCount: 1
    }
  }

  nextSlide() {
    this.setState({ slideCount: this.state.slideCount + 1 });
  }

  previousSlide() {
    this.setState({ slideCount: this.state.slideCount - 1 });
  }

  render() {

    return (
      <div className="slider">

        {/* Slides go here */}
        { this.state.slideCount === 1 ?
          <div>
            <SlideHome1 />
            <RightArrow nextSlide={this.nextSlide}/>
          </div>
          : null }
          { this.state.slideCount === 2 ?
            <div>
              <SlideHome2 />
              <RightArrow nextSlide={this.nextSlide}/>
              <LeftArrow previousSlide={this.previousSlide}/>
            </div>
            : null }
      </div>
    );
  }
}

export default SliderHome;
