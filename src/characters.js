import { nanoid } from 'nanoid';
import getImage from './services/api.js';

export default function getCharacters() {
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

  const characterPromises = characterNames.map(async (name) => ({
    name,
    image: await getImage(name),
    id: nanoid(),
  }));

  const characters = Promise.all(characterPromises);
  return characters;
}
