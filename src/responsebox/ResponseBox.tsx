// ResponseBox.tsx

import React from 'react';
import { Completion } from '../types/privategptresponses';

interface ResponseBoxProps {
  response: Completion | null; // Update the type to Completion | null
}

const ResponseBox: React.FC<ResponseBoxProps> = ({ response }) => {
  return <div className="response-box">{response?.choices[0]?.message?.content}</div>;
  // You might need to adjust the above line based on the actual structure of your data
};

export default ResponseBox;
