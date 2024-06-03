import { useState } from 'react';
import Header from './Header';
import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';

import '../styles/index.css';

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);

  const bestScore = 0;

  return (
    <>
      <Header />
      <ScoreBoard current={currentScore} best={bestScore} />
      <GameBoard />
    </>
  );
}
