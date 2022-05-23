import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <Container>
      <Mail target="_blank" href="mailto:abeermahmoudali9298@gmail.com">
        abeermahmoudali9298@gmail.com
      </Mail>
      <List>
        <SocialItem>
          <SocialLink target="_blank" href="https://github.com/abeermahmoud62">
            <FaGithub />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink
            target="_blank"
            href="https://www.linkedin.com/in/abeer-mahmoud-b567b6172/"
          >
            <FaLinkedin />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink target="_blank" href="https://twitter.com/AbeerMahmoud62">
            <FaTwitter />
          </SocialLink>
        </SocialItem>
      </List>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  background: #111;
  color: var(--clr-accent);
  text-align: center;
  padding: 2.5em 0;
  width: 100%;
`
const Mail = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: var(--fs-h3);
  font-weight: var(--fw-bold);
  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`
const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 2em 0 0;
  padding: 0;
`
const SocialItem = styled.li`
  margin: 0 0.5em;
`
const SocialLink = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 0.5em;
  font-size: var(--fs-h3);
  &:hover {
    opacity: 0.7;
  }
`
