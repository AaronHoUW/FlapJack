import { useEffect}  from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useRef } from "react";
import {
	User,
} from './styles.tsx';
import { Background } from "./styles.tsx";

function FlapGuide(props) {
  const { isFlapGuide, setIsFlapGuide } = props;
  
    // Player Movement
    const [xAxis, setXAxis] = useState(60);
    const [yAxis, setYAxis] = useState(100);

    // Change Player's Position
    const userPlacement = { top: yAxis + -500 +'px', left: xAxis + 960 + 'px' };
    const navigate = useNavigate();
    const user = useRef(null);

  
    const handleKeyDown = event => {
      if (event.key === 'ArrowRight') {
        setXAxis(xAxis + 50)
      }
      if (event.key === 'ArrowLeft') {
        setXAxis(xAxis - 50)
      }
      if (event.key === 'ArrowDown') {
        setYAxis(yAxis + 50)
      }
      if (event.key === 'ArrowUp') {
        setYAxis(yAxis - 50)
      }
    };



  useEffect(() => {
    setIsFlapGuide(true);
  }, [isFlapGuide]);

  return (
    <div className='play-area' onClick={() => user.current.focus()}>
    <Background className="play-area">
      <img className="speech" src='./imgs/text.png' />
      <img className="talk" src='./imgs/interaction.png' />
      <img className="excel" src='./imgs/excel.png' />
      <img className="bubble" src='./imgs/bubbles.png' />
      <img className="fish" src='./imgs/sal.png' onClick={() => navigate('/level2')} />
      <img className="flapjack-guide" src='./sprites/sprite-pancake-flapjack-octopus.png' />
    </Background>
      {/* User */}
      <User
        style={userPlacement}
        ref={user}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        src={`/sprites/sprite-user-placeholder.png`}
        id='playable'
        className='img-size'
        alt="User's placeholder"
      />
          </div>
);
};

export default FlapGuide;

