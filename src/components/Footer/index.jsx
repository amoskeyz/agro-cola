import React from 'react';
import './Footer.scss';
import Image from '../../assets/logo_green.png';
import Image2 from '../../assets/Rec3.png';
import Image3 from '../../assets/Rec4.png';
import Image4 from '../../assets/Rec6.png';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="cover">
    <div>
        <img src={Image} />
    </div>
    <div className="flex">
      <section className="copyright">
        <div className="links">Copy right 2019 AgroMall Discovery and Extension Limited</div>
        <div className="links">All right reserved</div>
      </section>
      <section>
        <div className="header">Link</div>
        <div className="links">User</div>
        <div className="links">State</div>
        <div className="links">Media</div>
        <div className="links">Experience It</div>
        <div className="links">Join us</div>
      </section>
      <section>
        <div className="header">Follow us</div>
        <div className="image">
        <a className="social-link" href="/">
        <img src={Image2} />
        </a>
        <a className="social-link" href='/'>
        <img src={Image3} />
        </a>
        <a className="social-link" href="/">
        <img src={Image4} />
        </a>
        </div>
      </section>
    </div>
    </div>
    </div>
  );
}

export default Footer;
