import React from 'react';
import CardItem from './CardItem';

import './Cards.css';
import img1 from '../../images/img-1.jpg';
import img2 from '../../images/img-2.jpg';
import img3 from '../../images/img-3.jpg';
import img4 from '../../images/img-4.jpg';
import img5 from '../../images/img-5.jpg';
import img6 from '../../images/img-6.jpg';
import img7 from '../../images/img-7.jpg';
import img8 from '../../images/img-8.jpg';
import img9 from '../../images/img-9.jpg';


function Cards() {
  return (
    <div className="cards">

      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img9}
              text='Expole the hidden waterfall deep inside the Amaso Jungle'
              label='Adventure'
              path='/'
              // path='/services' should be here
            />

            <CardItem
              src={img2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/'
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src={img1}
              text='Try to visit Japan in Cherry Blossom Season during the period.'
              label='Exciting'
              path='/'
              // path='/services' should be here
            />

            <CardItem
              src={img5}
              text="Put all the infinity pools you've ever seen to shame. It offers a view of the neighboring city of Denizli."
              label='Adventure'
              path='/'
            />

            <CardItem
              src={img6}
              text='Located at the foot of the Atlas Mountains, Marrakesh has changed little since the Middle Ages. '
              label='History'
              path='/'
            />

            <CardItem
              src={img7}
              text='With turquoise lagoons, coral reefs and overwater bungalows, this small island in the South Pacific is basically heaven on Earth - Bora Bora'
              label='Adventure'
              path='/'
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src={img3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/'
              // path='/services' should be here
            />

            <CardItem
              src={img4}
              text='Experience Football on top of the Himilayan Mountains'
              label='Adventure'
              path='/'
            />

            <CardItem
              src={img8}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;