import { useState } from 'react';
import './App.css';

const phrases = [
  "No",
  "Are you sure?",
  "Are you REALLY sure?",
  "Bestie, Please",
  "I'm going to CRY...",
  "WAAAAAAAAAAAA",
  "HEARTBROKEN ;(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const yesButtonStyle = {
    backgroundColor: 'green',
    color: 'white'
  }

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="app-container">
      {yesPressed ? (
        <div className="centered">
          <img alt="Yes Gif" src="https://tenor.com/view/bear-kiss-bear-kisses-kiss-kisses-love-gif-22536058.gif" />
          <p className='yes-response'>Yay, I LOVE YOU!!! You'll always be my Valentine! #4lyfers</p>
        </div>
      ) : (
        <div className="centered">
          <img alt="bear with hearts" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWgwdXA1bWFyOGx3YzYzaHU1dGdwb2ZlNWV4aHdlZHdoaW5za2k2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/U7VI2RFA6VcH2Gm7H9/giphy.gif" />
          <p className='valentine-question'>Hi Bestie! Will you be my Valentine?</p>
          <button
            className='yesButton'
            style={{ fontSize: yesButtonSize, yesButtonStyle }}
            onClick={() => setYesPressed(true)}
          >
            Yes
          </button>
          <button onClick={handleNoClick} className="noButton">
            {getNoButtonText()}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
