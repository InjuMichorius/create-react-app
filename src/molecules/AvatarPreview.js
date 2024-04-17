import React from "react";
import character1 from "../assets/images/character1.jpg";
import character2 from "../assets/images/character2.jpg";
import character3 from "../assets/images/character3.jpg";

function AvatarPreview({ imageId, points, username, size }) {
  // Map imageId to the corresponding image file
  const imageMap = {
    1: character1,
    2: character2,
    3: character3,
  };

  // If imageId exists in the map, use it, otherwise use character1 by default
  const imageSrc = imageMap[imageId] || character1;

  return (
    <div className={`avatar-preview-container ${size}`}>
      <div className="avatar-preview-container__image-container">
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Profile"
            className="avatar-preview-container__image-container__image"
          />
        )}{" "}
        <p className="avatar-preview-container__image-container__points">{points}pts</p>
      </div>

      <p className="avatar-preview-container__username">{username}</p>
    </div>
  );
}

export default AvatarPreview;
