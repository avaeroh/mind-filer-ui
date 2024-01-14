// src/App.tsx

import React, { useState } from 'react';
import axios from 'axios';
import Header from './header/Header';
import Image from './image/Image';
import InputBox from './inputbox/InputBox';
import ResponseBox from './responsebox/ResponseBox';
import './styles/global.css';

const App: React.FC = () => {
  const [imageCollapsed, setImageCollapsed] = useState(false);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (inputText: string) => {
    setLoading(true);

    try {
      const apiUrl = 'http://localhost:8000/v1/completions';

      const response = await axios.post(
        apiUrl,
        {
          prompt: inputText,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      setResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
      setImageCollapsed(true); // Set imageCollapsed to true after processing the input
    }
  };

  return (
    <div className="container">
      <Header />
      {!imageCollapsed && <Image />} {/* No need to pass imageUrl prop */}
      {!imageCollapsed ? (
        <InputBox onSubmit={handleSend} loading={loading} />
      ) : (
        <>
          <InputBox onSubmit={handleSend} loading={loading} />
          <ResponseBox response={response} />
        </>
      )}
    </div>
  );
};

export default App;
