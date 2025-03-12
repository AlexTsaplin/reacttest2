import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

// Массив навігаційних елементів
const navItems = [
    { name: "Home", path: "/" },
    { name: "Page", path: "/page" },
    { name: "Profile", path: "/profile" },
];

// Стилі для компонента Layout
const Layout = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <LayoutContainer>
            <Header>
                <MenuIcon onClick={handleDrawerToggle}>
                    &#9776;
                </MenuIcon>
                <AppTitle>My App</AppTitle>
                <Navigation className={mobileOpen ? 'open' : ''}>
                    <ul>
                        {navItems.map((item) => (
                            <NavItem key={item.name}>
                                <NavLink to={item.path}>{item.name}</NavLink>
                            </NavItem>
                        ))}
                    </ul>
                </Navigation>
            </Header>

            <MainContent>
                <Outlet />
            </MainContent>

            <Footer>
                <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
            </Footer>
        </LayoutContainer>
    );
};

// Styled components
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #3f51b5;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const MenuIcon = styled.div`
  font-size: 30px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const AppTitle = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 20px; /* Додаємо відступи між елементами */

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
  }

  li {
    margin: 0;
  }

  @media (max-width: 768px) {
    display: ${props => (props.className === 'open' ? 'block' : 'none')};
    background-color: #333;
    position: absolute;
    top: 50px;
    right: 0;
    width: 200px;
    padding: 10px;
  }
`;

const NavItem = styled.li`
  margin: 0 10px; /* Відступи між пунктами навігації */
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: #ffd700;
    text-decoration: underline;
  }
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
  margin-top: 64px;
`;

const Footer = styled.footer`
    background-color: #f1f1f1;
    text-align: center;
    padding: 16px;
`;

export default Layout;
