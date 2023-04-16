import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoContainer = styled.div`
    a {
        text-decoration: none;
        padding: 14px 16px;
        text-align: center;
    }
`;

export const ListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const ListItem = styled.div`
    margin-left: 40px;
`;

export const Link = styled(NavLink)`
    color: black;
    font-weight: bold;
    display: block;
    text-decoration: none;
    padding: 14px 16px;
    text-align: center;
    font-size: 20px;
    font-family: Mulish;
`;

export const PlayButton = styled(NavLink)`
    background-color: rgb(19, 66, 84);
    border-radius: 20px;
    color: white;
    font-family: Mulish;
    font-weight: bold;
    display: block;
    text-decoration: none;
    padding: 14px 16px;
    text-align: center;
    font-size: 20px;
    margin-right: 20px;
`;