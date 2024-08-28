import Navbar from './portfolio_components/navbar/Navbar'
import About from './portfolio_components/about/About'
import Footer from './portfolio_components/footer/Footer'
import Form from './portfolio_components/form/Form'
import Skills from './portfolio_components/skills/Skills'
import Projects from './portfolio_components/projects/Projects'
import ScrollUp from './portfolio_components/scroll/ScrollUp'

// Styling
import './App.scss'

import sample from './images/sample.mp4'

const AppContainer = () => {
  return (
    <div className='App'>
      <div className='portfolioContainer'>
        <video id='background-video' autoPlay loop muted>
          <source src={sample} type='video/mp4' />
        </video>
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <div className='scrollButton'>
          <ScrollUp />
        </div>
        <Form />
        <Footer />
      </div>
    </div>
  )
}

export default AppContainer
