import "./styles.css";
import React, { useState } from "react";
import tree from "./assets/image1.jpg";
import fish from "./assets/image2.jpg";
import shadow from "./assets/image3.jpg";
import sunset from "./assets/image4.jpg";
import flower from "./assets/image5.jpg";

const images = [tree, fish, shadow, sunset, flower];

const Loading = ({calculatedWidth}) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Patience is a virtue...</label>
      <progress 
        id="images-loaded"
        max="100" 
        value={calculatedWidth}
        ></progress>
    </div>
  </aside>
)

const App = () =>  {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;

    setCurrentImage ((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    });
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1); 
  };

  return (
    <section>
      <header>
        <h1>
          {" "}
          Inhale <br /> <i>Exhale</i>
        </h1>
        <h2>
          Meditative photographs <br /> by Kyja Kutnick
        </h2>
      </header>

      <figure>
        {numLoaded < images.length && ( 
          <Loading calculatedWidth={(numLoaded / images.length) * 100} /> 
        )}
        <figcaption>
          {currentImage + 1} / {images.length} 
        </figcaption>
        {images.map((imageURL, index) => (
          <img 
            alt="" 
            key={imageURL}
            src={imageURL} 
            onClick={handleClick} 
            onLoad={handleImageLoad}
            className={currentImage === index ? "display" : "hide"}
            />
        ))}
      </figure>
    </section>
  );
};

export default App;
