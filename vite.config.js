import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});

Cette application utilise Vite, React et Tailwind CSS pour créer une page simple avec un titre et des feux d'artifice en arrière-plan. Le composant `Fireworks` utilise la bibliothèque `canvas-confetti` pour générer les effets de feux d'artifice.