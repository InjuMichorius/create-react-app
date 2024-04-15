import { useState, useEffect } from 'react';

const useLocalStorageData = () => {
  const [points, setPoints] = useState(() => {
    const storedPoints = localStorage.getItem('points');
    return storedPoints ? parseInt(storedPoints) : 0;
  });

  const [imageId, setImageId] = useState(() => {
    const storedImageId = localStorage.getItem('imageId');
    return storedImageId || '';
  });

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'points') {
        setPoints(parseInt(event.newValue));
      } else if (event.key === 'imageId') {
        setImageId(event.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); // Empty dependency array ensures this effect only runs once

  return { points, imageId };
};

export default useLocalStorageData;
