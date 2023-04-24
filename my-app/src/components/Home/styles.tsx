import styled from 'styled-components';

export const HomeContainer = styled.div`
`;

export const IntroContainer = styled.div`
    background: url('./imgs/intro-bg.png');
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 80px 40px;
    width: 100%;
    height: 91vh;
    font-family: 'Mulish';
`;

export const IntroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    background-color: #f7ede1;
    border-radius: 20px;
    padding: 24px;
`;

export const IntroTitle = styled.h2`
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
    color: #134254;
    width: 100%;
    height: 60px;
`;

export const IntroDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: black;
    margin-bottom: 30px;
`;

export const MoreInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

export const ParentButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 16px 24px;
    color: #134254;
    font-size: 20px;
    cursor: pointer;

    div p {
        margin: 0;
        margin-right: 10px;
    }

    div p:nth-child(2) {
        text-decoration: underline;
    }

    img {
        width: 24px;
    }
`;

export const IntroButton = styled.button`
    width: 220px;
    padding: 16px 24px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    background-color: #85c9e3;

    font-size: 36px;
    color: #134254;
    border: none;
`;

export const IntroSprites = styled.div`
    height: 300px;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    .pancake {
        width: 200px;
    }

    .user {
        width: 500px;
    }
`;

export const MeetContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 46px;

    width: 100%;
    height: 1601px;

    background: url('./imgs/meet-bg.png');
    font-family: 'Mulish';
`;

export const MeetTitle = styled.h2`
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
    color: #134254;
    width: 100%;
    height: 60px;
`;

export const MeetSprites = styled.div`
    width: 100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));

    img {
        width: 100%;
    }
`;

export const LearnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 80px 40px;

    width: 100%;
    height: 70vh;

    background: url('./imgs/learn-bg.png');
    background-size: cover;
    font-family: 'Mulish';
`;

export const Learn = styled.div`
    
`;

export const LearnText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 10px;
    width: 50%;
`;

export const LearnTitle = styled.h2`
    width: 100%;
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
    color: white;
`;

export const LearnDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: white;
`;

export const LearnButton = styled.button`
    width: 240px;
    padding: 16px 24px;
    font-size: 36px;

    background: #85C9E3;
    border-radius: 40px;
    border: none;

    color: #134254;
    font-size: 30px;
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    gap: 15px;
    width: 100%;
    height: 15vh;
    background: #F2E0AA;
    font-family: 'Mulish';
`;

export const FooterText = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: black;
    margin: 0;
    display: flex;
    flex-direction: column;
    padding: 0;

    p {
        margin: 0;
    }

    span {
        font-weight: normal;
        font-style: italic;
        font-size: 14px;
    }
`;

export const FooterCopyright = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: black;
    margin: 0;

    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        margin: 0;
        margin-right: 10px;
    }
`;