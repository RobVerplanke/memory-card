import { nanoid } from 'nanoid';
import getImage from './services/api.js';

// All characters to play the game with
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

// Set data for each character
export function getCharacters() {
  const characterPromises = characterNames.map(async (name) => ({
    name,
    image: await getImage(name),
    id: nanoid(),
  }));

  const characters = Promise.all(characterPromises);
  return characters;
}

// Randomize array items
export function shuffleCards(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
