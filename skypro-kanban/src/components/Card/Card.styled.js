import styled from "styled-components";

const topicStyles = {
    _orange: {
        backgroundColor: "#FFE4C2",
        color: "#FF6D00",
    },
    _green: {
        backgroundColor: "#B4FDD1",
        color: "#06B16E",
    },
    _purple: {
        backgroundColor: "#E9D4FF",
        color: "#9A48F1",
    }
}

export const TopicStyles = styled.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
`;

export const CardStyles = styled.div`
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    background-color: ${({$color}) => topicStyles[$color]?.backgroundColor || 'grey'};
    color: ${({$color}) => topicStyles[$color]?.color || 'black'};
`;

export const CardGroupStyles = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CardContentStyles = styled.div`
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const CardItemStyles = styled.div`
    padding: 5px;
    animation-name: card-animation;
    animation-duration: 500ms;
    animation-timing-function: linear;
`;