import React from 'react';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Slider from './slider.js';
import './about.scss';

class About extends React.Component {
  constructor(props){
    super(props);


    this.state = {};
  }
  render(){
    return(
      <div>
        <Header/>
        <h3> About Me </h3>
        <div className="firstB">
        <img className="tjselfie" src={require('./tjselfie.jpg')} />
          <p className="firstP"> My name is T.J. Andrews. I am 28 years old, was born in Polson Montana, and now live in Whitefish Montana. I graduated from Polson High School in June of 2007. A week after that I received my Associates Degree in Building Construction Management from Flathead Valley Community College while working on it in high school. That winter I became a Freestyle Ski and Snowboard Coach for Whitefish Mountain Resort. In 2009, I became the Head Coach and ran the Freestyle program, where I coached athletes such as Maggie Voisin, the youngest girl to be on the US Olympic Slopestyle Ski Team that competed in Sochi, Russia. At the age of fifteen I began competing at many high level snowboarding freestyle and freeride competitions around Montana and neighboring Idaho. I resigned from coaching to ride in a few back country Montana Ski and Snowboard films such as: Come Find Us by Toy Soldier Productions, The Simple Side and Itinerary Part 1 produced by Big Hip Snowboards and Hi Line Films. After traveling to places like Japan and Chile to film snowboard segments, I settled back down in Whitefish and became a Head Guide for Great Northern Powder Guides as well as one of the top fabricators.

          </p>

        </div>
        <div className="secondB">
          <img className="tjselfie2" src={require('./tjselfie2.jpg')} />
          <p className="secondP">In the summer, I needed something extreme to keep me preoccupied until the next winter season and four years ago I found it! On the beaches of Whitefish Lake Montana I was introduced to the new sport of Flyboarding. In 2015, with little training, I entered my first Flyboard Competition at the North American Flyboard Championship in Shreveport, Louisiana. I qualified 9th and ended up in 15th place after unfortunately flipping the jet ski, which stops the time of your run. Making the top 16 gave me the push I needed to train hard and put in a qualification video for the 2015 Flyboard World Cup Competition in Dubai, United Arab Emirates. I was chosen to be one of the 10 riders from the USA to travel to Dubai and compete in December. Competing in Dubai came with some ups and downs, and because of that, unfortunately I didn't make it past the qualification round. Although I didn't qualify, I got my name out there and was recognized because of the high level of tricks that I performed during quaifications. It only made me more excited for the next summer to come around.
          </p>
        </div>
        <div className="thirdB">
          <img className="tjChampion" src={require('./tjChampion.jpg')} />
          <p className="thirdP">
    2016 brought more competitions and I began to place higher:

June 10th, Hydro Fest, Las Vegas Nevada: 15th place

September 3rd, Louisiana Hydroflight Invitational: 5th place

September 16th, Flyboard World Cup 2016, Naples Florida: 6th place

    Due to the mishaps at the Flyboard World Cup 2015 in Dubai, the judges pre qualified me for the World Cup 2016 in Naples Florida. I placed 10th in the qualification round putting me into a tough bracket to work through. I battled my way into the top 8 feeling very strong. I then had to compete with the two time consecutive world champion, which I narrowly lost to and who won it again, but I was overly excited to have ended up placing 6th in the world! I received a sponsorship from Zapata Racing, the inventor and manufacturer of the Flyboard.  Being a professional Flyboarder in Montana isn&#39t easy! Because of weather conditions, I only have approximately three months of available flying time during the summer so I must devote every bit of spare time that I have to train and achieve my goal of being the Number One Flyboarder in the world! That came true at the World Hydroflight Championships in 2017. I placed 2nd and 3rd at the Prowatercross National Tour and took 1st at the World Hydroflight Championships naming me number 1 overall! I want to defend my title and keep pushing the sport for 2018!
          </p>
        </div>
        <Slider/>
        <Footer/>
      </div>
    );
  }
}

export default About;
