import handleError from '../utils.js';

export default async function getImage(name) {
  const url = `https://api.dicebear.com/8.x/bottts/svg?seed=${name}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Response not OK: ${response.status}`);
    return response.url;
  } catch (error) {
    handleError(error);
  }
}
