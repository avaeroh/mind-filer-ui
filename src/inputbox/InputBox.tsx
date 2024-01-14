// src/components/InputBox.tsx

import React, { useState } from 'react';

interface InputBoxProps {
  onSubmit: (inputText: string) => Promise<void>;
  loading: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({ onSubmit, loading }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default behavior of the 'enter' key (form submission)
      if (!loading && inputText.trim() !== '') {
        await onSubmit(inputText);
        setInputText('');
      }
    }
  };

  return (
    <div className="input-box">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Type here..."
        disabled={loading}
      />
    </div>
  );
};

export default InputBox;
