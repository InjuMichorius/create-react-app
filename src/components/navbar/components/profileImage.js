import React, { useState, useEffect } from 'react';
import character1 from '../../../assets/images/character1.jpg';
import character2 from '../../../assets/images/character2.jpg';
import character3 from '../../../assets/images/character3.jpg';

function ProfileImage() {
  let [points, setPoints] = useState(localStorage.getItem('points'));
  let [imageId, setImageId] = useState(localStorage.getItem('imageId'));
  const [refreshKey, setRefreshKey] = useState(0); // State variable to force component re-render

  useEffect(() => {
    // This effect will run whenever local storage changes
    const handleStorageChange = () => {
      // Increment the key to force re-render
      setRefreshKey(prevKey => prevKey + 1);
      console.log('This effect will run whenever local storage changes');
      setPoints(localStorage.getItem('points'));
      setImageId(localStorage.getItem('imageId'));
    };

    // Listen for changes in local storage
    window.addEventListener('storage', handleStorageChange);
  }, []); // This effect runs only once when the component mounts

  let selectedImage = null;
  if (imageId === '1') {
    selectedImage = character1;
  } else if (imageId === '2') {
    selectedImage = character2;
  } else if (imageId === '3') {
    selectedImage = character3;
  }
  console.log(selectedImage)

  return (
    <div key={refreshKey} className="profile-image-container"> {/* Use the refreshKey as the key to force re-render */}
      {selectedImage && <img src={selectedImage} alt="Profile" className="profile-image-container__image" />}
      <p className="profile-image-container__points">{points}{imageId}pts</p>
    </div>
  );
}

export default ProfileImage;