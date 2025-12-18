import React, { useEffect } from 'react';
import * as Particles from 'canvas-confetti';

const Fireworks = () => {
  useEffect(() => {
    const confetti = Particles.create({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    const intervalId = setInterval(() => {
      confetti();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-full absolute top-0 left-0 z-0">
      <canvas id="confetti" className="w-full h-full"></canvas>
    </div>
  );
};

export default Fireworks;