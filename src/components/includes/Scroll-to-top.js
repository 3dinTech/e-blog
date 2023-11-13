import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const buttonStyle = {
    display: isVisible ? 'flex' : 'none',
  };

  return (
    <div className="scroll-top" style={buttonStyle}>
      <a href='#' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i class="fas fa-angle-up text-white"></i>
      </a>
    </div>
  );
};

export default ScrollToTopButton;