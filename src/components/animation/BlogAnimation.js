import React, { useEffect } from "react";
import lottie from "lottie-web";

function BlogAnimation() {
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: document.getElementById("BlogAnimContainer"), 
      renderer: "svg",
      loop: true,
      autoplay: true, 
      path: "https://lottie.host/bfc34796-2d66-4c0a-9e05-1a0a2fd582ac/8BOPmcC6Mb.json"
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div>
      <div id="BlogAnimContainer"></div>
    </div>
  );
}

export default BlogAnimation;
