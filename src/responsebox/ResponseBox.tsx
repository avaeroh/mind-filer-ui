// ResponseBox.tsx

import React from 'react';
import { Completion } from '../types/privategptresponses';

interface ResponseBoxProps {
  response: Completion | null;
}

const ResponseBox: React.FC<ResponseBoxProps> = ({ response }) => {

  return (
    <div className="response-box" style={{ whiteSpace: 'pre-line' }}>
      {response?.choices[0]?.message?.content}
    </div>
  );
};

export default ResponseBox;
