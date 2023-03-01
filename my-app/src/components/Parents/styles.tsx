import styled from 'styled-components';

export const IntroContainer = styled.div`
    background-color: #1E7FA4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 80px 40px;
    width: 100%;
    height: 60vh;
    font-family: 'Mulish';
    padding-bottom: 0;
`;

export const IntroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 40%;
    margin-left: 100px;
`;

export const IntroTitle = styled.h2`
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: white;
    width: 100%;
    height: 60px;
`;

export const IntroDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: white;
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

export const HelpContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 80px 40px;
    padding-top: 0;

    width: 100%;
    height: 80vh;

    background-color: #1E7FA4;
    font-family: 'Mulish';
`;

export const HelpText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 40%;
    margin-right: 100px;
`;

export const HelpDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: white;
    margin-top: 30px;
`;

export const HelpVideoContainer = styled.div`
    width: 60%;
    height: 100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-right: 100px;
    margin-left: 100px;
    display: flex;
    align-items: center;
`;

export const HelpVideo = styled.iframe`
`;

export const LearnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 46px;

    width: 100%;
    height: 80vh;

    background-color: #85C9E3;
    font-family: 'Mulish';
`;

export const LearnText = styled.div`
    width: 100%;
`;

export const LearnTitle = styled.h2`
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
    color: black;
    width: 100%;
    height: 60px;
`;

export const LearnDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: black;
    margin-top: 30px;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;

    width: 100%;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    text-align: center;

    width: 33%;

    img {
        width: 150px;
    }

    h4 {
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: black;
        margin: 20px;
    }
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
    background: #1E7FA4;
    font-family: 'Mulish';
`;

export const FooterText = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: white;
    margin: 0;
`;

export const FooterCopyright = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: white;
    margin: 0;

    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        margin: 0;
        margin-right: 10px;
    }
`;