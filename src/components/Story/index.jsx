import React from 'react';
import './Story.scss';
import Image from '../../assets/screen.jpg';
import Image2 from '../../assets/Rect4.svg';
import Image3 from '../../assets/ellipse13.png';
import Image4 from '../../assets/ellipse7.png';
import Fade from 'react-reveal/Fade';

const Story = () => {
  return (
    <div className="Story">
      <img className="try" src={Image3} alt=""/>
      <img className="ellipse7" src={Image4} alt=""/>
      <span>
        <div className="head">Hear Our Story</div>
      </span>
      <div className="image-rotate">
        <img src={Image} alt=""/>
      </div>
      <Fade duration={3000}>
        <div className="suub">
          <div className="text">
            <div className="caption">Let's reshape the future of agriculture, one crop at a time.</div>
            <button>Join Us</button>
          </div>
          <img className="immgg" src={Image2} alt=""/>
        </div>
      </Fade>
    </div>
  );
}

export default Story;
