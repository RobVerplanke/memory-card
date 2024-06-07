import Card from './Card.jsx';
import '../styles/gameboard.css';

// Create a gameboard which displays a serie of cards with characters on them and the correspondng names
export default function Gameboard({ characters, onClick }) {
  return (
    <div className="gameboard">
      {characters.map((character) => (
        <Card
          key={character.id}
          index={character.id}
          image={character.image}
          name={character.name}
          onClick={onClick}
        />
      ))}
    </div>
  );
}
