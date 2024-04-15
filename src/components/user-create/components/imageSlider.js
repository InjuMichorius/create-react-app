import React, { useState, useEffect } from 'react';
import image1 from '../../../assets/images/character1.jpg';
import image2 from '../../../assets/images/character2.jpg';
import image3 from '../../../assets/images/character3.jpg';

function ImageSlider() {
  const [selectedImage, setSelectedImage] = useState(''); // State to track the selected image ID

  // Load the selected image ID from localStorage when the component mounts
  useEffect(() => {
    const storedImageID = localStorage.getItem('imageId');
    if (storedImageID) {
      setSelectedImage(storedImageID);
    }
  }, []);

  const handleImageChange = (event) => {
    const newImageID = event.target.value;
    setSelectedImage(newImageID);
    localStorage.setItem('imageId', newImageID); // Store the selected image ID in localStorage
  };

  return (
    <div className="image-slider-container">
      <label>
        <input
          type="radio"
          name="image"
          value="1"
          checked={selectedImage === '1'}
          onChange={handleImageChange}
        />
        <img src={image1} alt="Charachter 1" />
      </label>
      <label>
        <input
          type="radio"
          name="image"
          value="2"
          checked={selectedImage === '2'}
          onChange={handleImageChange}
        />
        <img src={image2} alt="Charachter 2" />
      </label>
      <label>
        <input
          type="radio"
          name="image"
          value="3"
          checked={selectedImage === '3'}
          onChange={handleImageChange}
        />
        <img src={image3} alt="Charachter 3" />
      </label>
    </div>
  );
}

export default ImageSlider;
