import Card from './Card.jsx';
import '../styles/gameboard.css';

// Create a gameboard which displays a series cards with images on them
export default function Gameboard({ imageUrls, names, onClick }) {
  return (
    <div className="gameboard">
      {imageUrls.map((url, index) => (
        <Card
          key={index}
          index={index}
          url={url}
          name={names[index]}
          onClick={onClick}
        />
      ))}
    </div>
  );
}
