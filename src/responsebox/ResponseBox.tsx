import React from 'react';
import './ResponseBox.css';

interface ResponseBoxProps {
  response: string;
}

const ResponseBox: React.FC<ResponseBoxProps> = ({ response }) => {
  return <div className="response-box">{response}</div>;
};

export default ResponseBox;
