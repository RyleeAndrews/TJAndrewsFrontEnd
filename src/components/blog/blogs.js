import React from 'react';
import './blog.scss';
class Blogs extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div>
        <h3> Hydroflight World Championships </h3>
        <div className="blogB2">
        <img className="ecuador" src={require('./ecuador.jpg')} />
          <p className="blogP2">
            December 15th. 2017
            Got the opportunity to travel to Ecuador with the Flyboard Show Team and put on a two day show for the city of Quayaquil.
            What an experience! The night time LED light suit show had upwards of 20,000 spectators.
            Although we where up against some crazy equipment battles, the team came together to show the country of Ecuador what Flyboarding is all about!!!
          </p>
        </div>
        <div className="blogB1">
        <img className="naples" src={require('./naples.jpg')} />
        <p className="blogP1"> Oct. 29th. 2017 Hydroflight World Championships
          Held in Naples FL. Was stoked to have some solid battles to work my way up top 8. My battle round to advance to top 4 was against one of the best in the game, Rush Bragg. I came out on fire dropping multiple top of the hose infinity flips and the rest triple flip combinations.
          At the end of my run i sealed the deal with the worlds first ever in competition front flip.
          The landing was a little sketchy but was good enough to advance me into the top 4.
          In the top 4 I battle against Sean Ray who was looking really good.
          Although we where both extremely tired, we fought hard and in the end I came out on top with my first 1st place Championship win of my career!
        </p>
        </div>
      </div>
    );
  }
}

export default Blogs;
