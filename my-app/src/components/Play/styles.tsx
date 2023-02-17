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

export const Fish = styled.img<Props>`
    position: relative;
`;

export const User = styled.img<Props>`
`;

export const Net = styled.img<Props>`
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