// src/App.tsx

import React, { useState } from 'react';
import axios from 'axios';
import Header from './header/Header';
import Image from './image/Image';
import InputBox from './inputbox/InputBox';
import ResponseBox from './responsebox/ResponseBox';
import './styles/global.css';
import { Completion } from './types/privategptresponses';

const App: React.FC = () => {
  const [imageCollapsed, setImageCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<Completion | null>(null);

  const handleSend = async (inputText: string) => {
    setLoading(true);

    try {
      const apiUrl = 'http://localhost:8001/v1/completions';

      const { data } = await axios.post<Completion>(
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

      setResponse(data);
      setImageCollapsed(true);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Header />
      {response && <ResponseBox response={response} />}
      {!imageCollapsed && <Image />}
      {<InputBox onSubmit={handleSend} loading={loading} />}
    </div>
  );
};

export default App;
