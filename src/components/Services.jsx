import React from 'react'
import styled from 'styled-components'
const Services = () => {
  return (
    <Container>
      <MainTitle>What I do</MainTitle>
      <Wrapper>
        <SubTitle>Design + Development</SubTitle>
        <Text>
          I am a front-end developer with a passion for <br /> creating
          beautiful and functional user interfaces.
          <br /> I have a strong background in web design and <br />
          development, and I am constantly learning <br /> new technologies.
        </Text>
      </Wrapper>
      <Link href="#my-work">See my Work</Link>
    </Container>
  )
}

export default Services

const Container = styled.section`
  padding: 5em 2em;
  background: var(--clr-dark);
  background-image: url(${process.env.PUBLIC_URL + './img/services-bg.jpg'});
  /* background-blend-mode: multiply; make it darker */
  color: var(--clr-light);
  text-align: center;
`
const MainTitle = styled.h2`
  color: var(--clr-accent);
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 2em;
    height: 1px;
    margin: 0.5em auto 0.5em;
    background: var(--clr-light);
    opacity: 0.5;
  }
`
const Wrapper = styled.div``
const SubTitle = styled.h3``
const Text = styled.p`
  margin-bottom: 2em;
`
const Link = styled.a`
  color: var(--clr-dark);
  background: var(--clr-accent);
  font-weight: var(--fw-bold);
  padding: 0.5em 1.5em;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 2px;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`
