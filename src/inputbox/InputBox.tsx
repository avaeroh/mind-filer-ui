// src/components/InputBox.tsx

import React, { useState } from 'react';
import LoadingOverlay from '../loadingoverlay/LoadingOverlay';
import '../styles/global.css'; 

interface InputBoxProps {
  onSubmit: (inputText: string) => Promise<void>;
  loading: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({ onSubmit, loading }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    if (!loading && inputText.trim() !== '') {
      await onSubmit(inputText);
      setInputText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div  className="input-box">
      <input
        type="text"
        value={inputText}
        placeholder='Query The Mindfiler...'
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        disabled={loading}
      />
      {loading && <LoadingOverlay />}
    </div>
  );
};

export default InputBox;
