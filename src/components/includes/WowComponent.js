import React, { useEffect } from 'react';
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';

const WowComponent = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
};

export default WowComponent;
