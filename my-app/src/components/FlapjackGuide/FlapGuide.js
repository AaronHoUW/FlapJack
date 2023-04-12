import { useEffect}  from "react";
import { useNavigate } from 'react-router-dom';
import { Background } from "./styles.tsx";

function FlapGuide(props) {
  const { isFlapGuide, setIsFlapGuide } = props;
  const navigate = useNavigate();

  useEffect(() => {
    setIsFlapGuide(true);
  }, [isFlapGuide]);

  return (
    <Background className="play-area">
      <img className="speech" src='./imgs/text.png' />
      <img className="talk" src='./imgs/interaction.png' />
      <img className="excel" src='./imgs/excel.png' />
      <img className="bubble" src='./imgs/bubbles.png' />
      <img className="fish" src='./imgs/sal.png' onClick={() => navigate('/level2')} />
      <img className="flapjack-guide" src='./sprites/sprite-pancake-flapjack-octopus.png' />
      <img className="user-placeholder" src='./sprites/sprite-user-placeholder.png' />
    </Background>
  );
};

export default FlapGuide;

