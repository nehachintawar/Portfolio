import React, { useEffect, useState } from 'react'
import resume from '../assets/Chintawar_Neha_Resume.pdf'
function Home() {
  const words = ["Web Development", "HTML", "CSS", "JavaScript", "SEO", "NodeJS"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    let typingSpeed = isDeleting ? 100 : 200;

    const typingInterval = setInterval(() => {
      if (!isDeleting) {
        setDisplayedText(currentWord.slice(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);

        if (letterIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000); 
        }
      } else {
        setDisplayedText(currentWord.slice(0, letterIndex - 1));
        setLetterIndex((prev) => prev - 1);

        if (letterIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [letterIndex, isDeleting, currentWordIndex]);


  return (
    <div className='home-container'>
      <div className="resume-container">
        <h2>Hii, my name is</h2>
        <h1>Neha Chintawar</h1>
        <h3>
          {displayedText}
          <span style={{ animation: 'blink 1s infinite' }}>|</span>
        </h3>
        <a href={resume}><button>Resume</button></a>
      </div>
    </div>
  )
}

export default Home;