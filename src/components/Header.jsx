import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
const Header = () => {
  return (
    <Container>
      <Logo
        src={
          process.env.PUBLIC_URL + './img/AbeerDev__2_-removebg-preview1.png'
        }
        alt="AbeerDev"
      />
      <Toggle>
        <FaBars />
      </Toggle>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#my-services">My Services</NavLink>
            <NavLink href="#about-me">About Me</NavLink>
            <NavLink href="#my-work">My Work</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </Container>
  )
}

export default Header
const Container = styled.header`
  font-family: 'Lora', serif;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`
const Logo = styled.img`
  object-fit: contain;
  height: 70px;
`
const Toggle = styled.div``
const Nav = styled.nav`
  display: none;
`
const NavList = styled.ul``
const NavItem = styled.li``
const NavLink = styled.a``
