import styled from 'styled-components';

export const ResourcesContainer = styled.div`
    background-color: #F2E0AA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 12px;
`;

export const SectionTitle = styled.h1`
    color: black;
    font-weight: 400;
    font-size: 60px;
    line-height: 69px;
    margin: 0;
`;

export const SectionTitleLight = styled.h1`
    color: white;
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
    background-size: contain;
`;

export const VideoContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;

    h2 {
        font-size: 48px;
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

export const ReadContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    gap: 20px;
    color: white;

    p {
        font-size: 20px;
        margin: 0;
    }
`;

export const Articles = styled.div`
    .citation {
        font-weight: 700;
    }

    a {
        color: white;
        font-weight: 700;
    }

    .detail {
        margin-bottom: 32px;
    }

    .last {
        margin: 0;
    }
`;

export const SimilarGamesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
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
        color: white;

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
            width: 40%;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 40px;
            border: none;
            padding: 16px 24px;
        }
    }
`;

export const DeepSea = styled.div`
    height: 275px;
    background: url('./imgs/deep-sea.png');
    background-size: cover;
`;