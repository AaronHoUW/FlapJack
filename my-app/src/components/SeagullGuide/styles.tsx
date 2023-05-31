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
    background-size: 100% 100%;
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
`;

export const DialogueImg = styled.img`
    position: absolute;
    width: 50%;
    top: 140px;
    left: 100px;
    z-index: 1;
    transform: scaleY(-1) scaleX(-1); 
`;

