import handleError from '../utils.js';

// Retreive a character image that corresponds with the given name
export default async function getImage(name) {
  const url = `https://api.dicebear.com/8.x/bottts/svg?seed=${name}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Response not OK: ${response.status}`);
    const data = await response.text();
    return data;
  } catch (error) {
    handleError(error);
  }
}
