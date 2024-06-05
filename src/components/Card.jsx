import '../styles/card.css';

// Create a button wich holds a unique image and add a index and a callback for handling a click
export default function Card({ index, url, onClick }) {
  return (
    <button className="card" data-id={index} onClick={onClick}>
      <img src={url} alt="Card image" />
    </button>
  );
}
