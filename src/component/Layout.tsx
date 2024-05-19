import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Nav, NavList, NavItem } from "../styles/styledLayout";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { FooterContainer, CopyrightText } from "../styles/styledLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";


const Layout = () => {

  const data = useSelector(
    (state: RootState) => state.childService.childService?.item
  );

  return (
    <>
      <Header>
        <h3>산림청 국립수목원 어린이생물도감서비스</h3>
      </Header>
      {/* <Nav>
        <NavList>
        <NavItem>
            <Link to="/home">대시보드</Link>
          </NavItem>
          <NavItem>
            <Link to="/list1">가스 사용량 통계</Link>
          </NavItem>
          <NavItem>
            <Link to="/list2">수도 사용량 통계</Link>
          </NavItem>
          <NavItem>
            <Link to="/list3">전기 사용량 통계</Link>
          </NavItem>
          <NavItem>
            <Link to="/childservice">산림청 국립수목원 어린이생물도감서비스</Link>
          </NavItem>
          <NavItem>
            <Link to="/medicalplants">산림청 약용식물 정보</Link>
          </NavItem>
        </NavList>
      </Nav> */}
      <Outlet />
      <FooterContainer>
      <FontAwesomeIcon icon={faCopyright} style={{marginRight : '5px'}}/>
      <CopyrightText>{data?.cprtCtnt}</CopyrightText>
    </FooterContainer>

    </>
  );
};

export default Layout;
