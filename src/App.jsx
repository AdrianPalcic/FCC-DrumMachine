import { useState } from 'react';
import { useEffect } from 'react';
import Display from './Components/Display';
import Buttons from './Components/Buttons';
import Pitch from './Components/Pitch';

let isClicked = false;

function App() {
  const [text, setText] = useState("");
  const [volume, setVolume] = useState(0.5);
  const [isPowerOn, setIsPowerOn] = useState(true);

  const buttonData = [
    { id: "Heater-1", key: "Q", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" },
    { id: "Heater-2", key: "W", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" },
    { id: "Heater-3", key: "E", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" },
    { id: "Heater-4", key: "A", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" },
    { id: "Clap", key: "S", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" },
    { id: "Open-HH", key: "D", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" },
    { id: "Kick-n'-Hat", key: "Z", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" },
    { id: "Kick", key: "X", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" },
    { id: "Closed-HH", key: "C", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" }
  ];

  const handleClick = (e) => {
    setText(e.target.id); 
    const audio = e.target.querySelector('audio');
    if (audio) {
      audio.volume = volume;
      audio.currentTime = 0; 
      audio.play();
    }
  };

  const handleRange = (e) => {
    setVolume(e.target.value / 100);
    setText('Volume: ' + e.target.value);
  };

  const switchFloat = () => {
    const power = document.querySelector('.inner');
  
    isClicked = !isClicked;
    setIsPowerOn(!isPowerOn);
  
    if (isClicked) {
      power.style.float = 'right';
    } else {
      power.style.float = 'left';
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isPowerOn) {
        const button = buttonData.find(b => b.key === e.key.toUpperCase());
        if (button) {
          const audio = document.getElementById(button.key);
          if (audio) {
            audio.volume = volume;
            audio.currentTime = 0;
            audio.play();
            setText(button.id);
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isPowerOn, volume]);


  return (
    <main>
      <div id="drum-machine" className='drum-wrapper'>

        <Display text={text} />

        <div className='custom-container'>

          <Buttons onClick={handleClick} power={!isPowerOn} buttonData={buttonData}/>
          <Pitch range={handleRange} float={switchFloat} power={!isPowerOn} />

        </div>
      </div>
    </main>
  );
}

export default App;
