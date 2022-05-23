import styled from 'styled-components'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import { useState } from 'react'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleHandler = () => {
    setIsOpen(!isOpen)
  }
  const handleLinkToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <div>
        <Logo
          src={process.env.PUBLIC_URL + './img/1-black.png'}
          alt="AbeerDev"
        />
      </div>
      <Toggle onClick={toggleHandler} isOpen={isOpen}>
        {isOpen ? <FaWindowClose /> : <FaBars />}
      </Toggle>
      <Nav isOpen={isOpen}>
        <NavList onClick={handleLinkToggle}>
          <NavItem>
            <NavLink href="/#home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#my-services">My Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#about-me">About Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#my-work">My Work</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </Container>
  )
}

export default Header
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
`
const Logo = styled.img`
  max-width: 120px;
`
const Toggle = styled.div`
  color: ${(props) => (props.isOpen ? '#fff' : '#000')};
  font-size: 2.3rem;
  margin-top: 0.5em;
  cursor: pointer;
  display: block;
  position: ${(props) => (props.isOpen ? 'fixed' : 'relative')};
  z-index: 1000;
  transition: transform 250ms ease-in-out;
  &::before,
  &::after {
    transition: transform 250ms ease-in-out;
    position: absolute;
    content: '';
    left: 0;
    right: 0;
  }
  &::before {
    top: 6px;
  }
  &::after {
    bottom: 6px;
  }
`
const Nav = styled.nav`
  position: fixed;
  background: var(--clr-dark);
  color: var(--clr-light);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  transform: ${(props) =>
    props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);
`
const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100%;
`
const NavItem = styled.li``
const NavLink = styled.a`
  color: inherit;
  font-weight: var(--fw-bold);
  font-size: var(--fs-h2);
  text-decoration: none;
  &:hover {
    color: var(--clr-accent);
  }
`
