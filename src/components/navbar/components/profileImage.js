import React, { useState, useEffect } from 'react';
import character1 from '../../../assets/images/character1.jpg';
import character2 from '../../../assets/images/character2.jpg';
import character3 from '../../../assets/images/character3.jpg';

function ProfileImage() {
  const [points, setPoints] = useState(0);
  const [imageId, setImageId] = useState('');

  useEffect(() => {
    // Fetch points from localStorage when the component mounts
    const storedPoints = localStorage.getItem('points');
    if (storedPoints) {
      setPoints(parseInt(storedPoints)); // Convert to integer
    }

    // Fetch image-id from localStorage when the component mounts
    const storedImageId = localStorage.getItem('image-id');
    if (storedImageId) {
      setImageId(storedImageId);
    }

    // Listen for changes to localStorage points
    const handlePointsChange = () => {
      const updatedPoints = localStorage.getItem('points');
      if (updatedPoints) {
        setPoints(parseInt(updatedPoints)); // Update points state
      }
    };

    // Listen for changes to localStorage image-id
    const handleImageIdChange = () => {
      const updatedImageId = localStorage.getItem('image-id');
      if (updatedImageId) {
        setImageId(updatedImageId); // Update imageId state
      }
    };

    window.addEventListener('storage', handlePointsChange);
    window.addEventListener('storage', handleImageIdChange);

    // Cleanup function
    return () => {
      window.removeEventListener('storage', handlePointsChange);
      window.removeEventListener('storage', handleImageIdChange);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="profile-image-container">
      {imageId === '1' && <img src={character1} alt="Profile" className="profile-image-container__image" />}
      {imageId === '2' && <img src={character2} alt="Profile" className="profile-image-container__image" />}
      {imageId === '3' && <img src={character3} alt="Profile" className="profile-image-container__image" />}
      <p className="profile-image-container__points">{points}pts</p>
    </div>
  );
}

export default ProfileImage;
