import React from "react";
import './Gallery.css';
import { images } from './images';

const Gallery = () => {

  return (
    <div className="gallery">
       <div className="row">
        {images.map((imageData) => (
          <div className="gallery-item" key={imageData.id}>
            <img
              src={imageData.image}
              alt={imageData.name}
              className={`gallery-img gallery-img-${imageData.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
