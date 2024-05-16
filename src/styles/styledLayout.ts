import styled from "styled-components";

export const Header = styled.header`
  text-align: center;
  padding: 20px 0;
  background-color: #0079c1;
  color: #fff;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  background-color: #f4f4f4;
  padding : 10px;
`;

export const NavList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

export const NavItem = styled.li`
  margin: 0 12px;
`;


export const Card = styled.div`
display: flex;
  flex-direction: column;
  flex-grow: 1; /* Fill remaining space */
  justify-content: center;
  align-items: center;


`