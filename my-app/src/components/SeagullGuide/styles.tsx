import styled from 'styled-components';
interface Props {
    style?: object;
    ref: any;
    tabIndex?: number;
    onKeyDown?: any;
    src: string;
    id?: string;
    className: string; 
    alt: string;
}

export const User = styled.img<Props>`
    width: 150px
`;

export const Background = styled.div`
    width: 100%;
    background-image: url('./sprites/bg-beach-flipped.png');
    background-size: cover;
    overflow: hidden;
    height: 100vh;
`;

export const ExclamationMarks = styled.img`
    width: 10px;

`;

export const DialogueMessageContainer = styled.div`
    display: flex;
    align-items: center;

    position: absolute;
    top: 30%;
    left: 30%;
    transform: translate(-50%, -50%);
    z-index: 2;
    max-width: 600px;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 45px;

    color: #000000;
    @media screen and (min-width: 600px) and (max-width: 900px) {
        top: 42%;
        left: 54%;
        width: 329px;
        p {
            width: 110%;
            font-size: 25px;
            line-height: 25px;
            height: 334px;
        }
    }
         @media screen and (min-width: 901px) and (max-width: 1300px) {
            width: 65%;
            left: 46%;
            top: 29%;
            font-size: 30px;
         }

         @media screen and (min-width: 1301px) and (max-width: 1500px) {
            width: 65%;
            left: 43%;
            top: 33%;
            font-size: 30px;
         }

`;

export const DialogueImg = styled.img`
    position: absolute;
    width: 50%;
    top: 140px;
    left: 100px;
    z-index: 1;
    transform: scaleY(-1) scaleX(-1); 
}
@media screen and (min-width: 600px) and (max-width: 900px) {
  width: 80%;
  height: 220px;
  bottom: 205px;
  left: 116px;
}

@media screen and (min-width: 901px) and (max-width: 1500px) {
  width: 70%;
}
  
      }
`;

