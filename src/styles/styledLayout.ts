import styled from "styled-components";

export const Header = styled.header`
  text-align: center;
  padding: 10px 0;
  position: fixed; /* Position fixed to bottom */
  left: 0; /* Align to the left */
  top: 0; /* Align to the bottom */
  width: 100%; /* Full width */
  margin-bottom : 10px;
  background: linear-gradient(
    45deg,
    #4caf50,
    #8bc34a
  ); /* Simple green gradient */
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.2); /* Darken edges for depth */
  color: #fff;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  background-color: #f4f4f4;
  padding: 10px;
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
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
`;

export const FooterContainer = styled.div`
  text-align: center;
  padding: 10px 10px;
  background: linear-gradient(
    45deg,
    #4caf50,
    #8bc34a
  ); /* Simple green gradient */
  // background-color: #f4f4f4; /* Set background color */
  color: #fff; /* Set text color */
  font-size: 14px; /* Adjust font size */
  position: fixed; /* Position fixed to bottom */
  left: 0; /* Align to the left */
  bottom: 0; /* Align to the bottom */
  width: 100%; /* Full width */
`;

export const CopyrightText = styled.span`
  font-size: 0.8rem;
  margin-right: 5px; /* Add some space to the right */
`;
