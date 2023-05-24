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
`;

export const Flapjack = styled.img<Props>`
    left: 10%;
    top: 60%;
    position: fixed;
    max-height: 92.86px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    animation: MoveUpDown 2s linear infinite;

    @keyframes MoveUpDown {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-15px);
        }
    }
`;

export const ArrowKeys = styled.img`
    width: 100px;
`;

export const DialogueBox = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-family: 'Mulish';
    font-size: 36px;
`;

export const DialogueMessageContainer = styled.div`
    display: flex;
    align-items: center;

    position: absolute;
    top: 86%;
    left: 33%;
    transform: translate(-50%, -50%);
    z-index: 2;
    max-width: 600px;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 45px;

    color: #000000;
}
@media screen and (min-width: 600px) and (max-width: 900px) {
    width: 54%;
    height: 184px;
    top: 734px;
    left: 396px;
}

@media screen and (min-width: 901px) and (max-width: 1000px) {
    width: 70%;
    left: 440px;
    top: 708px;

 }

 @media screen and (min-width: 1001px) and (max-width: 1399px) {
    width: 70%;
    left: 480px;
    top: 687px;

 }

@media screen and (min-width: 1400px) and (max-width: 1500px) {
  width: 77%;
  left: 530px;
}
  
      }
`;

export const DialogueImg = styled.img`
    position: absolute;
    width: 50%;
    bottom: 30px;
    left: 150px;
    z-index: 1;
}
@media screen and (min-width: 600px) and (max-width: 900px) {
    top: 77%;
    left: 9%;
    width: 75%;
    height: 180px;
    p {
        width: 110%;
        font-size: 25px;
        line-height: 25px;
        height: 334px;
    }
}

@media screen and (min-width: 901px) and (max-width: 1050px) {
    width: 61%;
    left: 13%;
    top: 75%;

 }

 @media screen and (min-width: 1051px) and (max-width: 1399px) {
    width: 60%;
    left: 6%;
    top: 70%;

 }
     @media screen and (min-width: 1400px) and (max-width: 1500px) {
        width: 60%;
        left: 6%;
        top: 70%;
    
     }
`;

export const Circle = styled.img<Props>`
    position: absolute;
    top: 24%;
    right: 10%;
    max-height: 250px
`;

export const Net = styled.img<Props>`
    top: 30%;
    left: 0%;
    position: relative;

    animation: MoveUpDown 1s linear infinite;
    
    @keyframes MoveUpDown {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-15px);
        }
    }
`;

export const Trash = styled.img<Props>`
    top: 30%;
    left: 0%;
    position: relative;

    animation: MoveUpDown 1s linear infinite;

    @keyframes MoveUpDown {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-15px);
        }
    }
`;