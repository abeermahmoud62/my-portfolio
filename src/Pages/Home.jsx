import IntroSection from '../components/IntroSection'
import Services from '../components/Services'
import AboutMe from '../components/AboutMe'
import Work from '../components/Work'
function Home() {
  return (
    <div className="Home">
      <IntroSection />
      <Services />
      <AboutMe />
      <Work />
    </div>
  )
}

export default Home
