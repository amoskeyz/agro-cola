import React from 'react';
import Fade from 'react-reveal/Fade';

const SubSec = ({ head, text, image, head2, read }) => {
  return (
    <Fade duration={3000}>
        <div className="sub-sec">
            <div className="first">
                <div className={head2 ? 'head2 caption' : 'caption'}>{head}</div>
                {head2 && <div className="head1 caption">{head2}</div>}
                <section>{text}</section>
                {read && <div className="read">Read more</div>}
            </div>
            <div className="second">
                <img src={image} alt="second" />
            </div>
        </div>
    </Fade>
  );
}

export default SubSec;
