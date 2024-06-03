import '../styles/card.css';

export default function Card({ image, onClick }) {
  return (
    <button className="card">
      <img src={image} alt="Card image" onClick={onClick} />
    </button>
  );
}
