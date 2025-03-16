import React from "react";
import ImageCard from "./ImageCard";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <div>
      {images.map((image) => (
        <ImageCard
          image={image}
          key={image.id}
          onClick={() => onImageClick(image)}
        />
      ))}
    </div>
  );
}
