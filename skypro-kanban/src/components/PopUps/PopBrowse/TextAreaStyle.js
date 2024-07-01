import styled from "styled-components";

export const FormTextareaPop = styled.textarea`
    max-width: 370px;
    margin-top: 14px;
    height: 200px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    font-family: inherit;
    color: ${props => props.theme.popExitTtl};

    &::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }

    @media screen and (max-width: 495px) {
        max-width: 100%;
        height: 34px;
    }
`;