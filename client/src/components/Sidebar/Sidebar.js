import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  background: #0f0f0f;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0px;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #0f0f0f;
    color: #fff;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 10px;
  background: #872f2f;
  padding: 10px 20px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #fff;
    color: #000;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  cursor: pointer;
`;

const SidebarNav = styled.nav`
  background: #0f0f0f;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  box-shadow: 2px 0px 5px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = ({ loggedIn, logout }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          {loggedIn ? (
            <NavIcon to="#">
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
          ) : (
            <></>
          )}

          <NavMenu className="topnav">
            {loggedIn ? (
              <NavBtn>
                <NavBtnLink to="/login" onClick={logout}>
                  Sign Out
                </NavBtnLink>
              </NavBtn>
            ) : (
              <>
                <NavBtn>
                  <NavBtnLink to="/login">Sign In</NavBtnLink>
                </NavBtn>
                <NavLink to="/register">Be a member</NavLink>
              </>
            )}

            <NavIcon>
              <NavLink to="/home">
                <AiIcons.AiFillHome />
              </NavLink>
            </NavIcon>
          </NavMenu>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
