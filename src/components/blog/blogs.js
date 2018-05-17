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
      <div className="blogB4">
      <h3 className="title"> Vegas Trip 1</h3>
      <h2 className="subTitle">Las Vegas, NV</h2>
      <h1 className="date"> March 25th, 2018 </h1>
        <img className="vegasFriends" src={require('./vegasLake.jpg')} />
        <p className="blogP4">
        Jordan and I are back on the road to Las Vegas to train with Sean Ray. This time our tickets are booked and the event is going down in Gold Coast Australia. Let the training camp begin!!!
        We will be there for a total of 6 days with our other team mate Mike Prince of team Canfly coming down on Thursday.
        </p>
      </div>
      <div className="blogB3">
      <h3 className="title"> Vegas Trip 1</h3>
      <h2 className="subTitle">Las Vegas, NV</h2>
      <h1 className="date"> February 14th, 2018 </h1>
        <img className="Vegas1" src={require('./vegas1.jpg')} />
        <p className="blogP3">
        Well that was a bummer. Jordan one of my team mates from team Canfly and I are on our way to train in Las Vegas with our buddy Sean Ray before departing to Dubai, when we get an email from Savvy Entertainment. Savvy Entertainment is the company putting on the first ever world Hydroflight tour competition.
        They explained due to unforeseen circumstances that they had to cancel the event in Dubai.
        Although we where all bummed we decided to make a training session out of it seeing where we where already there.
         My first trick which was my goto trick, I ended up getting wrapped in the hose and slamming to the water.
         After a painful weekend come to find out I punctured my eardrum.
         Not Fun! Didn&#39;t get the full training in like I wanted but did end up going back out before I flew home to get at least one good run under my belt.
        </p>
      </div>
        <div className="blogB2">
        <h3 className="title"> Ecuador</h3>
        <h2 className="subTitle">Quayaquil, Ecuador</h2>
        <h1 className="date"> December 15th, 2017 </h1>
          <img className="ecuador" src={require('./ecuador.jpg')} />
          <p className="blogP2">
            December 15th. 2017
            Got the opportunity to travel to Ecuador with the Flyboard Show Team and put on a two day show for the city of Quayaquil.
            What an experience! The night time LED light suit show had upwards of 20,000 spectators.
            Although we where up against some crazy equipment battles, the team came together to show the country of Ecuador what Flyboarding is all about!!!
          </p>
        </div>
        <div className="blogB1">
          <h3 className="title"> Hydroflight World Championships</h3>
          <h2 className="subTitle">Naples, FL</h2>
          <h1 className="date"> October 29, 2017 </h1>
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
