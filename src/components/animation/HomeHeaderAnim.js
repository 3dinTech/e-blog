import React, { useEffect } from "react";
import lottie from "lottie-web";

function HomeAnimation() {
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: document.getElementById("HomeAnimContainer"), 
      renderer: "svg",
      loop: true,
      autoplay: true, 
      path: "https://lottie.host/536b5783-65bc-4ef0-bf12-5a4dac6fc9fd/YukMzphLMf.json"
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div>
      <div id="HomeAnimContainer"></div>
    </div>
  );
}

export default HomeAnimation;
