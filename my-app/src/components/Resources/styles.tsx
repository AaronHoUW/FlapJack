import styled from 'styled-components';

export const ResourcesContainer = styled.div`
    background-color: #F2E0AA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 12px;

    div {
        text-align: left;
        display: flex;
        align-items: center;
        gap: 12px;
        flex-direction: column;
        width: 50%;
        background-color: #F7EDE1;
        border-radius: 20px;
        padding: 24px;
    }
`;

export const SectionTitle = styled.h1`
    color: #134254;
    font-weight: 700;
    font-size: 60px;
    line-height: 69px;
    margin: 0;
`;

export const SectionTitleLight = styled.h1`
    color: #134254;
    font-weight: 400;
    font-size: 60px;
    line-height: 69px;
    margin: 0;
`;

export const ParagraphText = styled.p`
    font-size: 20px;
    margin: 0;
`;

export const VideosContainer = styled.div`
    padding: 40px;
    background: url('./imgs/video-bg.png');
    background-size: 100% 100%;
`;

export const VideoContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;

    div {
        background-color: #F7EDE1;
        border-radius: 20px;
        padding: 24px;
    }

    h2 {
        font-size: 48px;
        color: #134254;
    }

    h3 {
        font-size: 36px;
    }

    iframe {
        height: 334px;
    }
`;

export const MoreVideosContainer = styled.div`
    padding: 40px;
    background: url('./imgs/videos-bg.png');
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;

    .more-content {
        gap: 74px;
    }
`;

export const SimilarGamesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1 {
        color: white;
    }
`;

export const GameCards = styled.div`
    display: flex;
    flex-direction: row;
    gap: 80px;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: black;
        background-color: #F7EDE1;
        border-radius: 20px;
        padding: 24px;
        
        @media screen and (min-width: 901px) and (max-width: 1200px) {
            display: flex;
            flex-direction: column;
            gap: 39px;
            color: black;
            background-color: rgb(247, 237, 225);
            border-radius: 20px;
            padding: 24px;
            width: 326px;
            max-width: 661px;        
         }

         @media screen and (min-width: 1200px) and (max-width: 1500px) {
            display: flex;
            flex-direction: column;
            gap: 39px;
            color: black;
            background-color: rgb(247, 237, 225);
            border-radius: 20px;
            padding: 24px;
            width: 326px;
         }
 

        p {
            font-size: 20px;
        }

        img {
            width: 350px;
            height: 207px;
        }

        h3, p {
            margin: 0;
        }

        a {
            text-decoration: none;
        }

        button {
            width: 35%;
            background: #85C9E3;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 40px;
            border: none;
            padding: 16px 24px;
            font-size: 20px;
        }
    }
`;

export const DeepSea = styled.div`
    height: 350px;
    background: url('./imgs/deep-sea.png');
    background-size: 100% 100%;
`;