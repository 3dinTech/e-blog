import React, { useEffect } from "react";
import lottie from "lottie-web";

function ContactUSAnimation() {
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: document.getElementById("contact-us-animContainer"), 
      renderer: "svg",
      loop: true,
      autoplay: true, 
      path: "https://lottie.host/0c7a6d9a-c785-4db6-a171-7d7e90a43fff/CwpHbfBB0Y.json"
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div>
      <div id="contact-us-animContainer"></div>
    </div>
  );
}

export default ContactUSAnimation;
