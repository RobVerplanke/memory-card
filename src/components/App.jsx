import { useState, useEffect } from 'react';
import Header from './Header';
import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';
import getImage from '../services/api.js';
import handleError from '../utils.js';

import '../styles/index.css';

// Characters (from dicebear.com/playground/?style=bottts) to play the game with
const characterNames = [
  'Felix',
  'Pepper',
  'Peanut',
  'Bandit',
  'Gizmo',
  'Snickers',
  'Sugar',
  'Shadow',
];

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [images, setImages] = useState([]);

  // Load all images when component is loaded for the first time only
  useEffect(() => {
    async function initImages() {
      try {
        const urlPromises = characterNames.map((name) => getImage(name));
        const imagesUrls = await Promise.all(urlPromises);
        setImages(imagesUrls);
      } catch (error) {
        handleError(error);
      }
    }
    initImages();
  }, []);

  return (
    <>
      <Header />
      <ScoreBoard current={currentScore} best={bestScore} />
      <GameBoard images={images} />
    </>
  );
}
