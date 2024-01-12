
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SpinnerGame.css';

const SpinnerGame = () => {
  const [isSpinning, setSpinning] = useState(false);
  const [prize, setPrize] = useState(null);

  const spinWheel = () => {
    // Disable the spin button while spinning
    setSpinning(true);

    // Simulate random prize selection after 3 seconds
    setTimeout(() => {
      const randomPrizeIndex = Math.floor(Math.random() * 6); // 0 to 5
      setPrize(randomPrizeIndex);

      // Enable the spin button
      setSpinning(false);
    }, 3000);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 text-center">
          <h1 className='text-white'>Spinner Game</h1>
          <div className={`spinner-container ${isSpinning ? 'spinning' : ''}`}>
            <div className={`spinner ${prize !== null ? `prize-${prize}` : ''}`}></div>
          </div>
          <button
            className="btn btn-primary mt-3"
            onClick={spinWheel}
            disabled={isSpinning}
          >
            {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
          </button>
          {prize !== null && (
            <div className="mt-3 text-white">
              <h3>Congratulations! You won:</h3>
              <p>{`Prize ${prize + 1}`}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpinnerGame;
