import React, { useState, useEffect } from 'react';
import './typewriter.css';

const Typewriter = () => {
  const phrases = ['Web Developer', 'UI/UX Designer'];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // new state for pause

  useEffect(() => {
    if (isPaused) return;

    const current = phrases[index];
    const speed = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (deleting) {
        const updatedText = current.slice(0, charIndex - 1);
        setText(updatedText);
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        const updatedText = current.slice(0, charIndex + 1);
        setText(updatedText);
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === current.length) {
          setIsPaused(true);
          setTimeout(() => setDeleting(true), 1000); // only change to deleting after pause
          setTimeout(() => setIsPaused(false), 1000); // resume typing after pause
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, index, isPaused]);

  return (
    <h2 className="typewriter-text">
      I'm a <span>{text}</span>
    </h2>
  );
};

export default Typewriter;
