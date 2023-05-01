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

export const Whale = styled.img<Props>`
    right: 0%;
    top: 20%;
    position: absolute;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
