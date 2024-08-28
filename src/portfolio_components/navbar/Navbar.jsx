// Styling & Bootstrap
import './Navbar.scss'
import { Button, Dropdown } from 'react-bootstrap'
import { Link } from 'react-scroll'

// Icons
import Linkedin from './../../images/linkedin.svg'
import Github from './../../images/github.svg'
import Hamburger from './../../images/hamburger.svg'
import { useState } from 'react'

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='NavbarContainer'>
      <div className='LinkContainer'>
        <Link id='custom' to='about' smooth={true} offset={-100}>
          About
        </Link>
        <Link id='custom' to='skills' smooth={true} offset={-100}>
          Skills
        </Link>
        <Link id='custom' to='projects' smooth={true} offset={-100}>
          Projects
        </Link>
        <Link id='custom' to='contact' smooth={true} offset={-100}>
          Contact
        </Link>
        <Dropdown show={show}>
          <Dropdown.Toggle variant='success' id='dropdown-basic' onClick={() => setShow(!show)}>
            <Button id='hamburgerButton' variant='secondary'>
              <img src={Hamburger} alt='hamburger icon' />
            </Button>
          </Dropdown.Toggle>
          {show ? (
            <Dropdown.Menu>
              <div className='LinkDropDownMenu'>
                <Link id='custom1' to='about' offset={-100} onClick={() => setShow(!show)}>
                  About
                </Link>
                <Link id='custom1' to='skills' offset={-100} onClick={() => setShow(!show)}>
                  Skills
                </Link>
                <Link id='custom1' to='projects' offset={-100} onClick={() => setShow(!show)}>
                  Projects
                </Link>
                <Link id='custom1' to='contact' offset={-100} onClick={() => setShow(!show)}>
                  Contact
                </Link>
              </div>
            </Dropdown.Menu>
          ) : null}
        </Dropdown>
      </div>
      <div className='IconContainer'>
        <Button variant='secondary' target='_blank' href='https://github.com/Tansuz'>
          <img src={Github} alt='github icon' />
        </Button>
        <Button
          variant='secondary'
          target='_blank'
          href='https://www.linkedin.com/in/taneli-oikari-04100422b/'>
          <img src={Linkedin} alt='Linkedin icon' />
        </Button>
      </div>
    </div>
  )
}

export default Navbar
