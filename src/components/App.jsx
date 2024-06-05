import { useState, useEffect } from 'react';
import Header from './Header';
import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';
import getImageUrl from '../services/api.js';
import handleError from '../utils.js';

import '../styles/index.css';

// Characters (from: dicebear.com/playground/?style=bottts) to play the game with
const characterNames = [
  'Felix',
  'Pepper',
  'Sophie',
  'Bandit',
  'Snickers',
  'Gizmo',
  'Sugar',
  'Shadow',
  'Cali',
  'Sasha',
];

export default function App() {
  const [currentScore, setCurrentScore] = useState(0); // Keeps track of the current score
  const [bestScore, setBestScore] = useState(0); // Keeps track of the highest score so far
  const [imageUrls, setImageUrls] = useState([]); // Store urls of character images
  const [clickedButtonIds, setClickedButtonIds] = useState([]); // Store clicked button IDs

  // Player clicked a button
  function onClick(e) {
    e.preventDefault();
    const buttonId = e.currentTarget.dataset.id; // Get ID of clicked button

    // Check if the player has already clicked this button by comparing its ID with IDs of buttons that have already been clicked
    if (clickedButtonIds.includes(buttonId)) {
      setCurrentScore(0); // Reset current score
      setClickedButtonIds([]); // Clear clicked IDs
      return false;
    }

    // User didn't click this button before
    setClickedButtonIds([...clickedButtonIds, buttonId]); // Store ID
    setCurrentScore((prevCurrentScore) => prevCurrentScore + 1); // Update scoreboard
  }

  // Initialize the game by loading the buttons and their images with a API request
  useEffect(() => {
    async function initImages() {
      try {
        // Retreive the image url for each charactername.
        const urlPromises = characterNames.map((name) => getImageUrl(name));
        const imageUrls = await Promise.all(urlPromises);
        setImageUrls(imageUrls); // Store corresponding urls
      } catch (error) {
        handleError(error);
      }
    }
    initImages();
  }, []); // Load once on mount

  // Update 'Best score'-counter if 'Current score' is greater
  useEffect(() => {
    if (currentScore > bestScore) setBestScore(currentScore);
  }, [currentScore, bestScore]);

  // Render the title, the scoreboard and the gameboard that displays the cards
  return (
    <>
      <Header />
      <ScoreBoard current={currentScore} best={bestScore} />
      <GameBoard
        imageUrls={imageUrls}
        names={characterNames}
        onClick={onClick}
      />
    </>
  );
}
