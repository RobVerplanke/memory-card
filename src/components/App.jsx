import { useState, useEffect } from 'react';
import Header from './Header';
import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';
import getCharacters from '../characters.js';

import '../styles/index.css';

// Get all charactars that are used in this game
// const characters = getCharacters(); // RETURNS URL AS PROMISE <<<<<<<<<<<<<<<<<<

export default function App() {
  const [currentScore, setCurrentScore] = useState(0); // Keeps track of the current score
  const [bestScore, setBestScore] = useState(0); // Keeps track of the highest score so far
  const [clickedButtonIds, setClickedButtonIds] = useState([]); // Store clicked button IDs
  const [characters, setCharacters] = useState([]);

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

  useEffect(() => {
    async function fetchCharacters() {
      const characters = await getCharacters();
      setCharacters(characters);
    }
    fetchCharacters();
  }, []);

  // Update 'Best score'-counter if 'Current score' is greater
  useEffect(() => {
    if (currentScore > bestScore) setBestScore(currentScore);
  }, [currentScore, bestScore]);

  // Render the title, the scoreboard and the gameboard that displays the cards
  return (
    <>
      <Header />
      <ScoreBoard current={currentScore} best={bestScore} />
      <GameBoard characters={characters} onClick={onClick} />
    </>
  );
}
