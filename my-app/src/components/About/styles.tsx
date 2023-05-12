import styled from 'styled-components';

export const IntroContainer = styled.div`
    background: url('./imgs/about-intro-bg.png');
    background-size: 100% 100%;;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 80px 40px;
    width: 100%;
    height: 1086px;
    font-family: 'Mulish';
    gap: 100px;
`;

export const IntroItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 38px;
    align-items: center;

    .text-bubble-intro {
        position: absolute;
        top: 340px;
        width: 75%;
        left: 37px;
        height: 300px;
    }

    h2 {
        position: absolute;
        top: 430px;
        left: 70px;
        color: #134254;
        font-weight: 700;
        font-size: 64px;
        z-index: 1;
    }

    .intro-bubble {
        margin-top: 160px;
        width: 100%;
    }

    .shawn-intro {
        transform: scaleX(-1);
        max-width: 170px;
    }
`;

export const IntroTitle = styled.h2`
    position: absolute;
    color: #134254;
    font-weight: 700;
    font-size: 64px;
    z-index: 1;
`;

export const IntroTitleBubble = styled.img`
    position: absolute;
    top: 340px;
    width: 75%;
    left: 37px;
`;

export const IntroTitleContainer = styled.div`
    text-align: right;

    .intro-title-who {
        top: 1280px;
        left: 70px;
    }

    .text-bubble-who {
        top: 1250px;
    }
`;

export const IntroHeader = styled.div`
    display: flex;
    flex-direction: column;
    color: black;

    h1 {
        color: #134254;
        font-weight: 700;
        font-size: 78px;
    }

    p {
        font-size: 32px;
    }
`;

export const IntroPopUp = styled.div`
    display: flex;
    width: 50%;
    background-color: #F7EDE1;
    flex-direction: column;
    justify-content: center;
    padding: 35px;
    border-radius: 20px;

    :nth-child(2) {
        width: 100%;
    }
`;

export const IntroDescription = styled.p`
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;
    color: black;
    margin: 0;

    a {
        color: black;
        text-decoration: underline;
    }
`;


export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 46px;

    width: 100%;
    height: 5100px;

    background: url('./imgs/about-bg.png');
    font-family: 'Mulish';

    .presentation {
        margin-top: 75px;
        
        h2 {
            height: 115px;
        }

        #learn-more {
            height: 60px;
        }
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

    .features-two {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 100px;
    }

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
    background: #F7EDE1;
    border-radius: 20px;
    padding: 24px;
`;

export const FeatureContainer = styled.div`
    display: flex;
    width: 40%;
    height: 650px;
    flex-direction: column;
    align-items: flex-start;
    padding: 36px;
    gap: 36px;
    background-color: #F7EDE1;
    border-radius: 20px;

    h3 {
        color: #134254;
        font-size: 50px;
        margin: 0;
    }

    p {
        margin-bottom: 0;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .read-more-button {
        align-self: flex-end;
        border: none;
        background-color: transparent;
        font-size: 20px;

        img {
            width: 20px;
            border: none;
            pointer-events: none;
        }
    }

    .show-less-arrow {
        transform: translateY(-1);
    }

    :nth-child(3) {
        flex-direction: column;
    }

    img {
        border: 10px solid black;
        width: 650px;
        border-radius: 10px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        background: #F7EDE1;
        border-radius: 20px;
        padding: 24px;
    }

    .gifs {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: transparent;
        border-radius: 0;
        padding: 0;
        
        img {
            width: 30%;
        }
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
    
    div:first-child {
        background: #F7EDE1;
        border-radius: 20px;
        padding: 24px;
        color: black;

        h2 {
            color: black;
        }
    }

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

export const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
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

        .links {
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            height: 38.39px;

            div {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
            }
    
            a {
                color: white;
                font-size: 20px;
                text-decoration: none;
            }
    
            img {
                width: 32px;
            }
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

export const AquariumContainer = styled.div`
    color: white;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
        color: white;
    }

    p {
        font-size: 20px;
    }
`;

export const AcknowledgementsContainer = styled.div`
    background: url('./imgs/acknowledgements-bg.png');
    height: 500px;
    background-size: cover;
    font-family: 'Mulish';
    padding: 80px 40px;
    border-top: none;
    display: flex;
    flex-direction: column;
    gap: 36px;
    h2 {
        color: white;
    }

    p {
        font-size: 20px;
        color: white;
    }
`;