import React from 'react';
import icon1 from '../../Assets/icons/icon1.png';
import icon2 from '../../Assets/icons/icon2.png';
import icon3 from '../../Assets/icons/icon3.png';
import Fade from 'react-reveal/Fade';
function DigitalCard() {
  return (
    <div>
      <div className="grid-row">
        <Fade duration={500}>
          <div className="grid-column">
            <div className="grid-card">
              <img src={icon1} alt="icon" />
              <h3>Secure storage</h3>
              <p>The world's leading cryptocurrency trading platform.</p>
              <button className="storage">Read More → </button>
            </div>
          </div>
        </Fade>
        <Fade duration={1000} delay={200}>
          <div className="grid-column">
            <div className="grid-card">
              <img src={icon2} alt="icon2" />
              <h3>Secure storage</h3>
              <p>The world's leading cryptocurrency trading platform.</p>
              <button className="storage">Read More → </button>
            </div>
          </div>
        </Fade>
        <Fade duration={2000} delay={400}>
          {' '}
          <div className="grid-column">
            <div className="grid-card">
              <img src={icon3} alt="icon3" />
              <h3>Secure storage</h3>
              <p>The world's leading cryptocurrency trading platform.</p>
              <button className="storage">Read More → </button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default DigitalCard;
