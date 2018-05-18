import React from 'react';
import Footer from '../footer/footer.js';
import Vegas4 from './vegas4.mp4';
import SliderHome from './sliderHome.js';
import './blog.scss';
class Blogs extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="main">
        <div className="blogB8">
          <h3 className="title"> Australia </h3>
          <h2 className="subTitle">Byron Bay, Australia</h2>
          <h1 className="date"> April 5th, 2018</h1>
          <img className="straya2" src={require('./straya2.jpg')} />
          <p className="blogP8">
            Oh boy. Well guys... bummed to say that I flipped the Jet Ski in my qualifying run. I flipped the ski on my third trick.
            My first two tricks where super solid and actually almost made it to the next round. Missed making top 16 by like a tenth of a point.
            Super tough to swallow especially after coming off taking 1st at my last event and such a long trip around the world.
            You know though it happens to everyone. You win some you loose some. It was cool though to get to watch everyones runs, and see how the judges score.
            Just cause you loose out doesn&#39;t mean its time to roll over and be bummed. Take it all in and learn from your mistakes.
            Stoked to say I am super prepared for Singapore!
            Now off to Byron Bay for some much needed relaxing on the beach for 3 days. Lets see what Australia has to offer!
          </p>
        </div>
        <div className="blogB7">
          <h3 className="title"> Australia </h3>
          <h2 className="subTitle">Sanctuary Cove Gold Coast, Australia</h2>
          <h1 className="date"> April 2nd, 2018 </h1>
          <img className="straya" src={require('./australiaPool.jpg')} />
          <p className="blogP7">
            Welcome to the Intercontinental Resort here in Sanctuary Cove Gold Coast Australia.
            Not a bad flight. slept most of the way. Now time to get ready for the competition.
          </p>
        </div>
        <div className="blogB6">
          <h3 className="title"> Vegas Trip 2</h3>
          <h2 className="subTitle">Las Vegas, NV</h2>
          <h1 className="date"> March 30th, 2018 </h1>
          <iframe className="Vegas3" src={Vegas4} type="video/mp4"/>
          <p className="blogP6">
            After checking out Sean&#39;s ski last night we found what we didn&#39;t want to find. He broke a piece of his hull insert that unfortunately is on back order from BRP for two months!!!? Talk about a bum deal. At least I found the problem on my ski.
            I called up my dealer ship to ask what the part number was and they said that the part is only available from BRP which will take 5 days.
            Well we don&#39;t have 5 days. He was able to track the only stock one available in the US and would you believe it..... its in Henderson Nevada which happens to be about 10 miles from where we where flying.
            How crazy is that??? We got the part by 1 pm and started training again. Let the games begin.
          </p>
        </div>
        <div className="blogB5">
          <h3 className="title"> Vegas Trip 2</h3>
          <h2 className="subTitle">Las Vegas, NV</h2>
          <h1 className="date"> March 29th, 2018 </h1>
          <img className="Vegas2" src={require('./vegas2.jpg')} />
          <p className="blogP5">
            Well this is Hydroflight. Woke up to a beautiful day here in Lake Las Vegas. Skis have been running great, we have been training hard, Jordan and myself have both stomped the infamous front flip....then we break both Sean&#39;s ski and my ski. Feel bad seeing where mike is coming all the way from British Columbia to train and now we have no skis. Time to get to work and see what we can do.
          </p>
        </div>
        <div className="blogB4">
          <h3 className="title"> Vegas Trip 2</h3>
          <h2 className="subTitle">Las Vegas, NV</h2>
          <h1 className="date"> March 25th, 2018 </h1>
          <img className="vegasFriends" src={require('./vegasFriends.jpg')} />
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
        <SliderHome/>
        <Footer/>
      </div>
    );
  }
}

export default Blogs;
