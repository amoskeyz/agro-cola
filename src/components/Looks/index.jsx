import React from 'react';
import './Looks.scss';
import Card from '../Card';
import Image from '../../assets/R.png';
import Image2 from '../../assets/R1.png';
import Image3 from '../../assets/R2.png';
import Image4 from '../../assets/R3.png';
import Image5 from '../../assets/R4.png';
import Image6 from '../../assets/R5.png';
import Image7 from '../../assets/R6.png';
import Image8 from '../../assets/R7.png';
import Image9 from '../../assets/rectangle12.png'

const Looks = () => {
  return (
    <div className="Looks">
      <img className="tryer" src={Image9} alt=""/>
        <div className="caption">A Closer Look</div>
        <div className="card-container">
            <Card
            image={Image}
            title="How It Works"
            details="AgroCola’s efficient and easy to use registration allows users to get onboard in a few easy steps." 
            color="#F5F6F4"
            duration={1000}
            />
            <Card
            image={Image2}
            title="Associations"
            details="The AgroCola Association is an independent, not-for -profit membership organisation..." 
            color="#F5F6F4"
            duration={2000}
            />
            <Card
            image={Image3}
            title="The New Deal"
            details="AgroCola will bring financial benefits to the young ones of Nigeria that participate in 5 poss..." 
            color="#FFFFFF"
            duration={3000}
            />
            <Card
            image={Image4}
            title="The Case For AgroCola"
            details="We believe that if 2 million educated young farmers are engaged to cultivate 2 million hectares..." 
            color="#FFFFFF"
            duration={4000}
            />
            <Card
            image={Image5}
            title="Community"
            details="AgroCola is creating a vibrant collaborative community where young persons and other..." 
            color="#F5F6F4"
            duration={5000}
            />
            <Card
            image={Image6}
            title="Patners"
            details="Partnerships will support in several categories for the rapid development and deployment..." 
            color="#F5F6F4"
            duration={6000}
            />
            <Card
            image={Image7}
            title="Cola"
            details="AgroCola will drive financial inclusion of the youth in agriculture and the rural economy by..." 
            color="#FFFFFF"
            duration={7000}
            />
            <Card
            image={Image8}
            title="Research and Knowledge"
            details="The intersection of youth and digital technology holds the promise of unlocking exponential..." 
            color="#FFFFFF"
            duration={8000}
            />
        </div>
    </div>
  );
}

export default Looks;
