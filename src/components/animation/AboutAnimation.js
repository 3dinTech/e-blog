import React, { useEffect } from "react";
import lottie from "lottie-web";

function AboutAnimation() {
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: document.getElementById("AboutAnimContainer"), 
      renderer: "svg",
      loop: true,
      autoplay: true, 
      path: "https://lottie.host/239156ee-beb1-4bfc-84d9-a4469d500d5c/OlzgH5iUF1.json"
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div>
      <div id="AboutAnimContainer"></div>
    </div>
  );
}

export default AboutAnimation;
