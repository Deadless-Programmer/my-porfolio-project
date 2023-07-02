import React, { useState, useEffect } from 'react';

const TypingTextAnimation = ({ text, typingSpeed }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let timer;

    const typeText = () => {
      if (currentIndex < text.length) {
        setDisplayText((prevDisplayText) => prevDisplayText + text[currentIndex]);
        currentIndex++;
        timer = setTimeout(typeText, typingSpeed);
      }
    };

    typeText();

    return () => {
      clearTimeout(timer);
    };
  }, [text, typingSpeed]);

  return (
    <h1 style={{ fontFamily: 'Arial', fontSize: '24px', color: '#333', fontWeight: 'bold' }}>
      {displayText}
    </h1>
  );
};

export default TypingTextAnimation;
