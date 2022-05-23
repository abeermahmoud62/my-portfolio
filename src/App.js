import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import PortfolioItem from './Pages/PortfolioItem'
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<PortfolioItem />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
