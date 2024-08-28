// Styling & Bootstrap & NextUI
import './About.scss'
import Taneli from '../../images/taneli.png'

const About = () => {
  return (
    <div className='AboutContainer' id='about'>
      <div className='bottomBox'>
        <img src={Taneli} alt='Taneli Oikari' />
      </div>
      <div className='textContainer'>
        <div className='firstText'>
          <h1>
            {'<h1> Hello! I`m Taneli Oikari'} <br /> {'Front End Developer </h1>'}
          </h1>
        </div>
        <div className='secondText'>
          <p>
            Couple years ago i started to aim long time goal to becoming software developer and
            studied myself vocational examination degree. Currently my strongest knowledge goes to
            front-end side but i am not scared working on back-end side too. New technologies always
            interested me and i am always eager to learn something new. I like throw my ideas to
            others and catch something new from others too.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
