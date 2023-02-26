import styled from 'styled-components';

interface ContainerProps {
    backgroundImage: string,
}

export const VisualNovelContainer = styled.div<ContainerProps>`
    height: 100vh;
    background-size: cover;
    overflow: hidden;
    background-image: ${(props) => props.backgroundImage};
    
    .dialogue-left .textBox {
        transform: scaleX(-1);
    }
`;

export const DialogueBox = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-family: 'Mulish';
    font-size: 36px;
`;

export const DialogueImg = styled.img`
    position: absolute;
    width: 80%;
    bottom: 30px;
    z-index: 1;
`;

export const DialogueMessageContainer = styled.div`
    position: absolute;
    top: 80%;
    left: 45%;
    transform: translate(-50%, -50%);
    z-index: 2;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;

    color: #000000;
`;

export const SpeakerContainer = styled.div`
    position: absolute;
    top: calc(100% - 300px);
    left: 250px;
    text-decoration: underline;
    z-index: 2;

    span {
        display: block;
        padding: 8px 16px;
        border-radius: 16px;
    }

    p {
        white-space: pre-wrap;
    }
`;