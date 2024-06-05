import '../styles/scoreboard.css';

// Display the current score and the highest score that is reached
export default function ScoreBoard({ current, best }) {
  return (
    <div>
      <table className="scoreboard">
        <tbody>
          <tr>
            <th>Score:</th>
            <th>{current}</th>
          </tr>
          <tr>
            <th>Best:</th>
            <th>{best}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
