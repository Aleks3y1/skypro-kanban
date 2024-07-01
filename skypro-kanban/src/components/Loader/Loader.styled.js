import styled, {keyframes} from "styled-components";

const gradientAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
`;

export const LoaderStatus = styled.div`
    width: 82px;
    height: 20px;
    border-radius: 18px;
    opacity: 1;
    background: linear-gradient(90deg, #C1CDDC -6.32%, #E9EEF7 46.75%, #C1CDDC 106.46%);
    background-size: 200% 100%;
    animation: ${gradientAnimation} 1.5s infinite linear;
`;

export const LoaderDate = styled.div`
    width: 58px;
    height: 13px;
    opacity: 1;
    background: linear-gradient(90deg, #C1CDDC -6.32%, #E9EEF7 46.75%, #C1CDDC 106.46%);
    background-size: 200% 100%;
    animation: ${gradientAnimation} 1.5s infinite linear;
`;

export const LoaderContent = styled.div`
    width: 113px;
    height: 13px;
    top: 50px;
    left: 13px;
    background: linear-gradient(90deg, #C1CDDC -6.32%, #E9EEF7 46.75%, #C1CDDC 106.46%);
    background-size: 200% 100%;
    animation: ${gradientAnimation} 1.5s infinite linear;
`;

export const LoaderCrumbs = styled.div`
    width: 18px;
    height: 4px;
    top: 23px;
    left: 185px;
    background: linear-gradient(90deg, #C1CDDC -6.32%, #E9EEF7 46.75%, #C1CDDC 106.46%);
    background-size: 200% 100%;
    animation: ${gradientAnimation} 1.5s infinite linear;
`;