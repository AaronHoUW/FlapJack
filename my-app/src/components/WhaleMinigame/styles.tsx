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
    animation: MoveUpDown 1s linear infinite;
    
    @keyframes MoveUpDown {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-25px);
        }
    }

    :nth-child(3) {
        animation-delay: 300ms;
    }

    :nth-child(4) {
        animation-delay: 500ms;
    }

    :nth-child(5) {
        animation-delay: 100ms;
    }
`;

export const Trash = styled.img<Props>`
    position: relative;
    animation: MoveUpDown 1s linear infinite;

    @keyframes MoveUpDown {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-25px);
        }
    }

    :nth-child(3) {
        animation-delay: 400ms;
    }

    :nth-child(4) {
        animation-delay: 100ms;
    }

    :nth-child(5) {
        animation-delay: 800ms;
    }
`;

export const Obstacle = styled.img<Props>`
    position: absolute;
    top: 40%;
    right: 45%;
    width: 300px;
`;

export const Whale = styled.img`
    right: 0%;
    top: 30%;
    position: absolute;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;