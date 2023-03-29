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
    top: 30%;
    position: fixed;
    max-height: 92.86px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Speech = styled.img<Props>`
    left: 9%;
    top: 7%;
    transform: scaleX(-1);
    position: fixed;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    z-index: 1;
`;

export const DialogueMessageContainer = styled.div`
    position: absolute;
    top: 17%;
    left: 29%;
    transform: translate(-50%, -50%);
    z-index: 2;

    max-width: 600px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;

    color: #000000;

    margin-top: 5px;
    display: flex;
    align-items: center;
`;

export const NextButton = styled.button`
    position: absolute;
    margin: 20px;
    top: 16%;
    left: 49%;
    
    padding: 12px 24px;
    
    border: none;
    background: #FFFFFF;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
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
`;

// export const Modal = styled.div`
//     position: fixed;
//     z-index: 1;
//     padding-top: 100px;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
//     display: block;
// `;

// export const ModalContent = styled.div`
//     margin: auto;
//     padding: 20px;
//     width: 100%;
// `;