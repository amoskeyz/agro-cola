import React from 'react';
import './Section.scss';
import SubSec from '../SubSec';
// import Nav from '../Nav';
import Image from '../../assets/Rec.svg';
import Image2 from '../../assets/Rect2.svg';
import Image3 from '../../assets/Rect3.svg';
import Image4 from '../../assets/ellipse4.png';
import Image5 from '../../assets/ellipse5.png';
import Image6 from '../../assets/ellipse6.png';

const Section = () => {
  return (
    <div className="Section">
      <img className="ellipse4" src={Image4} alt=""/>
      <img className="ellipse5" src={Image5}  alt=""/>
      <img className="ellipse6" src={Image6}  alt=""/>
        <SubSec
        head="Our Commitment"
        text="The AgroCola’s commitment is to create opportunities for the youth to thrive by engaging in agriculture and various agribusinesses. AgroCola is the integrated agricultural production platform that is built on digital technology."
        image={Image}
        />
        <SubSec
        head="Our"
        head2="Policies and Resolution"
        text="AgroCola provides Nigeria’s young farmers and agriculture value chain participants with an opportunity to create market influence, improve productivity, improve returns, and rightly position to compete in a national and international marketplace."
        image={Image2}
        read
        />
        <SubSec
        head="Our Sustainable Agriculture"
        head2="Philosophy"
        text="Our sustainable agriculture approach is anchored on the use of best available knowledge, technologies, and practices to ensure that intensification delivers more with minimal environmental impacts."
        image={Image3}
        read
        />
    </div>
  );
}

export default Section;
