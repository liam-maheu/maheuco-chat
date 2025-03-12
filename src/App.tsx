import React, { useState } from 'react';
import { ChatTerminal } from './components/ChatTerminal';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <ChatTerminal />
    </>
  );
}

export default App;
