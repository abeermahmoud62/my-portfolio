import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import ProductsData from '../ProjectsData'
const PortfolioItem = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[1]
  const product = ProductsData.find((product) => product.id === id)
  return (
    <Container>
      <Wrapper>
        <Title className="title">
          <strong>{product.name}</strong>
        </Title>
        <SubTitle className="subtitle">{product.desc}</SubTitle>
      </Wrapper>
      <Section>
        <iframe
          src={product.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; "
          allowfullscreen
        ></iframe>
      </Section>
      <Details>
        <Date>
          <strong>Date: </strong>
          {product.date}
        </Date>
        <Tech>
          <strong>Library: </strong>
          {product.tech}
        </Tech>
        <Repo>
          <strong>GitHub REPO: </strong>
          <Link target="_blank" href={product.repo}>
            {product.repo}
          </Link>
        </Repo>
      </Details>
    </Container>
  )
}

export default PortfolioItem
const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.section`
  position: relative;
  padding: 5em 2em;
  @media (min-width: 600px) {
    display: grid;
    grid-template-areas:
      'img title'
      'img subtitle';
    grid-template-columns: min-content max-content;
    margin: 0 auto;
    max-width: 700px;
    grid-gap: 1em;
  }
`
const Title = styled.h1`
  font-weight: var(--fw-reg);
  strong {
    display: block;
  }
`
const SubTitle = styled.p`
  font-size: var(--fs-h3);
  font-family: var(--ff-secondary);
  background: var(--clr-accent);
  margin-bottom: 1em;
  padding: 0.25em 1em;
  @media (min-width: 600px) {
    align-self: start;
    grid-column: -1 /1;
    grid-row: 2;
    text-align: right;
    position: relative;
    left: -1.5em;
    width: calc(100% + 1.5em);
  }
`

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  iframe {
    width: 700px;
    height: 515px;
  }
  @media (max-width: 800px) {
    iframe {
      width: 80vw;
      height: 415px;
    }
  }
`
const Details = styled.section`
  border: 1px solid var(--clr-dark);
  padding: 1em;
  margin: 1em 0;
  @media (max-width: 800px) {
    width: 80vw;
  }
`
const Date = styled.p``
const Tech = styled.p``
const Repo = styled.a``
const Link = styled.a`
  font-size: 1.1rem;
  color: var(--clr-dark);
  text-decoration: none;
  word-break: break-all;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 800px) {
    width: 80vw;
  }
`
