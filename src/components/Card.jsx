import '../styles/card.css';

// Create a button wich holds a unique image, add a index and a callback for handling a click
export default function Card({ index, image, name, onClick }) {
  // Convert SVG text to url
  const blob = new Blob([image], { type: 'image/svg+xml' });
  const imageUrl = URL.createObjectURL(blob);
  return (
    <>
      <button className="card" data-id={index} onClick={onClick}>
        <img src={imageUrl} alt="Card image" />
        <p>{name}</p>
      </button>
    </>
  );
}
