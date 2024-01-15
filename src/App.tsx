// src/App.tsx

import React, { useState } from 'react';
import axios from 'axios';
import Header from './header/Header';
import Image from './image/Image';
import InputBox from './inputbox/InputBox';
import ResponseBox from './responsebox/ResponseBox';
import ErrorNotification from './errornotification/ErrorNotification';
import './styles/global.css';
import { Completion } from './types/privategptresponses';

const App: React.FC = () => {
  const [imageCollapsed, setImageCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<Completion | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async (inputText: string) => {
    setLoading(true);

    try {
      const apiUrl = 'http://localhost:8001/v1/completions';

      const { data } = await axios.post<Completion>(
        apiUrl,
        {
          prompt: inputText,
          system_prompt: 
          `You are an enthusiastic, respectful, honest and helpful dungeons and dragons knowledge base known as 'The Mind Filer'.
          When answering a question provide quotes wrapped in quote characters from the source documents.
          Cite the source documents explicitly.
          If the specific page number/numbers do not exist, reference the chapter title or most recent relevant heading.
          Do not speculate or make up information.`,
          use_context: true,
          'include_sources': true,
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
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError('There was an error reaching The Mindfiler.');
    } finally {
      setLoading(false);
    }
  };

  const closeError = () => {
    setError(null);
  };

  return (
    <div className="container">
      <Header />
      {response && <ResponseBox response={response} />}
      {error && <ErrorNotification message={error} onClose={closeError} />}
      {!imageCollapsed && <Image />}
      {<InputBox onSubmit={handleSend} loading={loading} />}
    </div>
  );
};

export default App;
