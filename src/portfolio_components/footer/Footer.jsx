// Styling & Bootstrap
import './Footer.scss'
import { Button } from 'react-bootstrap'

// Icons
import Email from './../../images/email.svg'
import Phone from './../../images/phone.svg'

const Footer = () => {
  const email = 'oikaritaneli@gmail.com'
  return (
    <div className='FooterContainer'>
      <div className='footerText'>
        <p>Taneli Oikari 2022</p>
        <Button variant='secondary' target='_blank' id='button1' href={`mailto:${email}`}>
          <img src={Email} alt='Email Icon' />
        </Button>
        <Button variant='secondary' id='button2' target='_blank' href='tel:+358408373285'>
          <img src={Phone} alt='Phone Icon' />
        </Button>
      </div>
    </div>
  )
}

export default Footer
