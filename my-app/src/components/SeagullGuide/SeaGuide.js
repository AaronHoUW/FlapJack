import { useEffect}  from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useRef } from "react";
import {
	User,
} from './styles.tsx';
import { Background } from "./styles.tsx";

function SeaGuide(props) {
  const { isSeaGuide, setIsSeaGuide } = props;
  
    // Player Movement
    const [xAxis, setXAxis] = useState(60);
    const [yAxis, setYAxis] = useState(100);

    // Change Player's Position
    const userPlacement = { top: yAxis + -450 +'px', left: xAxis + 150 + 'px' };
    const navigate = useNavigate();
    const user = useRef(null);
    const seagull = useRef(null);



  
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
      checkWithinRange();
    };

    	const handleWithinRange = (event) => {
		if (Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2) <= 400) {
			navigate('/level1');
		}
	}

    function checkWithinRange() {
      if (Math.sqrt((user.current.x - seagull.current.x) ** 2 + (user.current.y - seagull.current.y) ** 2) <= 400) {
        document.getElementById('transition').classList.add('in-range');
      } else {
        document.getElementById('transition').classList.remove('in-range');
      }
    }

  useEffect(() => {
    user.current.focus();
    seagull.current.focus();
    setIsSeaGuide(true);
  }, [isSeaGuide]);

  return (
    <div className='beach-area' onClick={() => user.current.focus()}>
    <Background className="beach-area">
    <img className="speech-two" src='./imgs/text.png' />
      <img className="talk-two" src='./imgs/speech-two.png' />
  <img className="shawn-two" src='./sprites/sprite-shawn-seagull.png' />
    <img className="excel-two" src='./imgs/excel.png' />
    <img className="shawn-seagull" id="transition" ref={seagull} src='./sprites/sprite-shawn-seagull.png' onClick={handleWithinRange} />
    <img className="secondflap-guide" src='./sprites/sprite-pancake-bowl.png' />
    </Background>
      {/* User */}
      <User
        style={userPlacement}
        ref={user}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        src={`/sprites/sprite-user-placeholder.png`}
        id='one-playable'
        className='img-size'
        alt="User's placeholder"
      />
          </div>
);
};

export default SeaGuide;

