import styled from 'styled-components'
const IntroSection = () => {
  return (
    <Container id="home">
      <Title className="title">
        Hi, I am <strong>Abeer M. Ali</strong>
      </Title>
      <SubTitle className="subtitle">front-end developer</SubTitle>
      <Image
        className="img"
        src={process.env.PUBLIC_URL + './img/about_me.jpg'}
        alt="Abeer-profile"
      />
    </Container>
  )
}

export default IntroSection

const Container = styled.section`
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
const Image = styled.img`
  box-shadow: var(--bs);
  @media (min-width: 600px) {
    grid-area: img;
    min-width: 250px;
    position: relative;
    z-index: 2;
  }
`
