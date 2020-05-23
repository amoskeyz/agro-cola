import React from 'react';
import './Story.scss';
import SubSec from '../SubSec';
// import Nav from '../Nav';
import Image from '../../assets/picture-frame.jpg';
import Image2 from '../../assets/Rect4.svg';
import Image3 from '../../assets/ellipse13.png';
import Image4 from '../../assets/ellipse7.png';

const Story = () => {
  return (
    <div className="Story">
      <img className="try" src={Image3} />
      <img className="ellipse7" src={Image4} />
    <span>
        <div className="head">Hear Our Story</div>
        </span>
        <img src={Image} />
<div className="suub">
<div className="text">
        <div className="caption">Let's reshape the future of agriculture, one crop at a time.
</div>
<button>Join Us</button>
</div>
        <img src={Image2} />
        </div>
    </div>
  );
}

export default Story;
