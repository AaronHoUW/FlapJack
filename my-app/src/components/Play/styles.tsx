import styled from 'styled-components';

interface FishProps {
    src: string;
    ref: any;
    onClick: any;
    className: string;
    alt: string;
}

export const Fish = styled.img<FishProps>`
    top: 100px;
    left: 250px;
    position: relative;
`;