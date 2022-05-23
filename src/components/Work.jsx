import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import projects from '../ProjectsData.js'
const Work = () => {
  const projectsList = projects.map((project, index) => {
    return (
      <WorkItem key={index}>
        <NavLink to={`/${project.id}`}>
          <Image src={project.img} alt={project.name} />
        </NavLink>
      </WorkItem>
    )
  })
  return (
    <Container id="my-work">
      <MainTitle>My Work</MainTitle>
      <SubTitle>A selection of my range of work</SubTitle>
      <Wrapper>{projectsList}</Wrapper>
    </Container>
  )
}

export default Work

const Container = styled.section`
  background: var(--clr-dark);
  color: var(--clr-light);
  text-align: center;
  padding: 5em 2em;
`
const MainTitle = styled.h2``
const SubTitle = styled.p`
  color: var(--clr-accent);
  font-weight: var(--fw-bold);
  letter-spacing: 1px;
  margin-bottom: 2em;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* grid-gap: 1em; */
`
const WorkItem = styled.a`
  background: var(--clr-accent);
  overflow: hidden;
  position: relative;
  z-index: 2;
  &:focus img {
    transform: scale(1.2);
    opacity: 0.5;
  }
`
const Image = styled.img`
  transition: transform 750ms cubic-bezier(0.5, 0, 0.5, 1), opacity 250ms linear;
  &:hover {
    transform: scale(1.2);
    opacity: 0.5;
  }
`
