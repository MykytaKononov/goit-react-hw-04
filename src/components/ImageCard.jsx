import React from "react";

export default function ImageCard({ image, onClick }) {
  return (
    <li onClick={onClick} style={{ listStyleType: "none" }}>
      <img src={image.urls.small} alt={image.alt_description} />
    </li>
  );
}
