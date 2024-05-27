import styled from "styled-components";

export const HeaderBlock = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`;

export const HeaderNav = styled.div`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: ${(props) => props.theme.nav};
    color: ${(props) => props.theme.text};
    transition: all 0.25s linear;
`;

export const Container = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;

    @media screen and (max-width: 495px) {
        width: 100%;
        padding: 0 16px;
    }
`;

export const HeaderButton = styled.button`
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565EEF;
    color: #FFFFFF;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;

    &:hover {
        background-color: #33399b;
    }

    @media screen and (max-width: 495px) {
        z-index: 3;
        position: fixed;
        left: 16px;
        bottom: 30px;
        top: auto;
        width: calc(100vw - 32px);
        height: 40px;
        border-radius: 4px;
        margin-right: 0;
    }
`;

export const HeaderUser = styled.div`
    height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: ${props => props.theme.text};
    transition: all 0.25s linear;
    cursor: pointer;
    
    &::after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 1px;
        border-left: 1.9px solid #565EEF;
        border-bottom: 1.9px solid #565EEF;
        transform: rotate(-45deg);
        margin: -6px 0 0 5px;
        padding: 0;
    }
    
    &:hover {
        color: #33399b;
    }
    &:hover::after {
        border-left-color: #33399b;
        border-bottom-color: #33399b;
    }
`;

export const PopUserSetTheme = styled.div`

`;