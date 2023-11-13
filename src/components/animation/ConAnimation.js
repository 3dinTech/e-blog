import React, { useEffect } from "react";
import lottie from "lottie-web";

function ContactAnimation() {
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: document.getElementById("animContainer"), 
      renderer: "svg",
      loop: true,
      autoplay: true, 
      path: "https://lottie.host/59b59749-e7da-4cf9-978b-02493a16176e/oIqzt5yYPn.json"
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div>
      <div id="animContainer"></div>
    </div>
  );
}

export default ContactAnimation;
