// ResponseBox.tsx

import React from 'react';
import { Completion } from '../types/privategptresponses';

interface ResponseBoxProps {
  response: Completion | null;
}

const ResponseBox: React.FC<ResponseBoxProps> = ({ response }) => {
  const formattedContent = response?.choices[0]?.message?.content.replace(/\n/g, '<br>');

  return (
    <div className="response-box" style={{ whiteSpace: 'pre-line' }}>
      {formattedContent}
    </div>
  );
};

export default ResponseBox;
