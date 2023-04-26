import styled from 'styled-components';

export const IntroContainer = styled.div`
    background: url('./imgs/intro-bg.png');
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 80px 40px;
    width: 100%;
    height: 91vh;
    font-family: 'Mulish';
`;

export const IntroHeader = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    width: 50%;

    h1 {
        color: black;
        font-weight: 600;
        font-size: 48px;
    }

    p {
        font-size: 20px;
    }
`;

export const IntroPopUp = styled.div`
    display: flex;
    width: 50%;
    background-color: #F7EDE1;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
    border-radius: 20px;

    :nth-child(2) {
        width: 60%;
    }
`;

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 46px;

    width: 100%;
    height: 4928.68px;

    background: url('./imgs/about-bg.png');
    font-family: 'Mulish';

    .presentation {
        margin-top: 75px;
    }

`;

export const FirstAboutSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 36px;

    h3 {
        font-size: 36px;
    }

    p {
        font-size: 20px;
    }
`;

export const AboutSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 36px;

    h3 {
        font-size: 36px;
    }

    p {
        font-size: 20px;
    }
`;

export const WhoDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 36px;
`;

export const FeatureContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 36px;

    :first-child {
        margin-top: 56px;
    }

    :nth-child(3) {
        flex-direction: column;
    }

    img {
        width: 40%;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    }
`;

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    color: white;
    margin-top: 60px;
    margin-bottom: 60px;

    h2 {
        color: white;
    }

    p {
        font-size: 20px;
    }
`;

export const StatusIcons = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: white;
    }
`;

export const MeetContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: white;
    gap: 24px;
    margin-top: 24px;

    img {
        height: 240px;
    }

    .about-text {
        width: 88%;
        display: flex;
        flex-direction: column;
        color: white;
        gap: 20px;

        h2 {
            margin: 0;
        }

        p {
            margin: 0;
        }

        div, p {
            font-size: 20px;
        }
    }
`;

export const RoleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 20px;

    div {
        background-color: #85C9E3;
        color: black;
        padding: 8px 16px;
        border-radius: 20px;
    }
`;

export const AcknowledgementsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 80px 40px;

    width: 100%;
    height: 70vh;

    background: url('./imgs/acknowledgements-bg.png');
    background-size: cover;
    font-family: 'Mulish';
`;