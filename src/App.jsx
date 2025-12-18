import React from 'react';
import Fireworks from './components/Fireworks';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-purple-500">
      <h1 className="text-6xl font-bold text-white mb-8">Pierre, merci pour ta démission</h1>
      <Fireworks />
    </div>
  );
};

export default App;