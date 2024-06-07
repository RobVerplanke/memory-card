import { useState, useEffect } from 'react';
import Header from './Header';
import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';
import { getCharacters, shuffleCards } from '../characters.js';

import '../styles/index.css';

export default function App() {
  const [currentScore, setCurrentScore] = useState(0); // Keeps track of the current score
  const [bestScore, setBestScore] = useState(0); // Keeps track of the highest score so far
  const [clickedButtonIds, setClickedButtonIds] = useState([]); // Store clicked button IDs
  const [characters, setCharacters] = useState([]); // Contains all characters on the cards

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
    shuffleCharacters();
  }

  // Get the characters
  async function fetchCharacters() {
    const characters = await getCharacters();
    setCharacters(characters);
  }

  // Shuffle the cards randomly in a new array
  function shuffleCharacters() {
    const shuffled = shuffleCards([...characters]);
    setCharacters(shuffled);
  }

  // Load the characters on load
  useEffect(() => {
    fetchCharacters();
  }, []);

  // Update 'Best-score' if current score is greater
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
