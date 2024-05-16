import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Nav, NavList, NavItem } from "../styles/styledLayout";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header>
        <h2>공공 데이터 API</h2>
      </Header>
      <Nav>
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
        </NavList>
      </Nav>
      <Outlet />
    </>
  );
};

export default Layout;
