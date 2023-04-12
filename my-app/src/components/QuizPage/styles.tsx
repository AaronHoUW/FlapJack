import styled from 'styled-components';

// import styled from 'styled-components';

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

export const Flapjack = styled.img<Props>`
    left: 10%;
    top: 30%;
    position: fixed;
    max-height: 92.86px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ScreenModal = styled.div`
    padding-top: 5vh
`;

export const Modal = styled.div`
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;
`;

export const ModalContent = styled.div`
    background-color: #C2EEFF;
`;

export const ModalRowText = styled.div`
    height: 0%;
    font-size: 25px
`;