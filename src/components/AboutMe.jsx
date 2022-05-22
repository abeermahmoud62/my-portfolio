import React from 'react'
import styled from 'styled-components'
const AboutMe = () => {
  return (
    <Container>
      <MainTitle>Who I am</MainTitle>
      <SubTitle>Front-end web developer using React JS</SubTitle>
      <Wrapper>
        <Text>
          I am Abeer, 24 years old, a self-taught developer. I am graduated from
          the University of Mansoura with a Bachelor of Engineering degree in
          the field of Electronics and communication Engineering.
        </Text>
        <Text>
          I found my passion in web development and I am currently working as a
          Front-End Developer using React.js. I am a self-motivated, ambitious
          and hard-working individual who is ready to learn new technologies.
        </Text>
      </Wrapper>
      <Image src={process.env.PUBLIC_URL + './img/-1_orig.jpg'} alt="Me" />
    </Container>
  )
}

export default AboutMe

const Container = styled.section`
  padding: 5em 2.5em;
  max-width: 1000px;
  margin: 0 auto;
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 200px;
    grid-template-areas:
      'title img'
      'subtitle img'
      'text img';
    grid-column-gap: 1em;
  }
`
const MainTitle = styled.h2`
  margin-top: 0;
  @media (min-width: 600px) {
    grid-area: title;
  }
`
const SubTitle = styled.p`
  margin: 0;
  font-size: var(--fs-h3);
  padding: 0.25em 1em;
  font-family: var(--ff-secondary);
  background: var(--clr-accent);
  margin-bottom: 1em;
  @media (min-width: 600px) {
    grid-column: 1 / -1;
    grid-row: 2;
    position: relative;
    left: -1em;
    width: calc(100% + 2em);
    padding-left: 1em;
    padding-right: calc(200px + 3em);
  }
`
const Wrapper = styled.div``
const Text = styled.p``
const Image = styled.img`
  box-shadow: var(--bs);
  @media (min-width: 600px) {
    grid-area: img;
    position: relative;
    z-index: 2;
  }
`
