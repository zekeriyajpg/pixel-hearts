import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [messageVisible, setMessageVisible] = useState(false);

  const handleHeartClick = () => {
    setCounter(prevCounter => {
      const newCount = prevCounter + 1;
      if (newCount >= 30) {
        setMessageVisible(true);
      }
      return newCount;
    });
  };

  const handleReset = () => {
    setCounter(0);
    setMessageVisible(false);
  };

  return (
    <div className="App">
      <div className="hearts-container">
        <div
          className="heart"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
          }}
          onClick={handleHeartClick}
        >
          💙
        </div>
      </div>

      <div className="counter">
        {counter}
      </div>

      {messageVisible && (
        <div className="message-box">
          <p>Uaaaa, bu gördüğüm dünyanın en güzel kızımı, bu başarıyı sadece o yapabilir!</p>
          <button className="reset-button" onClick={handleReset}>
            Sıfırla
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
