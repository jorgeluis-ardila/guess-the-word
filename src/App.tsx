import { useState } from 'react';
// test comment
function App() {
  const [word /* , setWord */] = useState('');
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    // Logic to check if the guess is correct
    if (guess === word) {
      setMessage('Congratulations! You guessed the word correctly!');
    } else {
      setMessage('Oops! That was not the correct word. Try again!');
    }
  };

  return (
    <div>
      <h1>Guess the Word Game</h1>
      <input type="text" value={guess} onChange={e => setGuess(e.target.value)} />
      <button onClick={handleGuess}>Guess</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
