// src/components/Image.tsx

import React from 'react';
import mindflayerImage from './mindflayer.jpg'; // Import the image

interface ImageProps {
  // Add any additional props you need
}

const Image: React.FC<ImageProps> = () => {
  return (
    <div className="image">
      <img src={mindflayerImage} alt="Mindflayer" style={{ width: '100%', height: 'auto',  display: 'flex'}}/>
    </div>
  );
};

export default Image;
