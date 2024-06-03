import Card from './Card.jsx';

import '../styles/gameboard.css';

export default function Gameboard({ images }) {
  return (
    <div className="gameboard">
      {images.map((image, index) => (
        <Card key={index} image={image} />
      ))}
    </div>
  );
}
