// Styling & Bootstrap
import { Card, Button } from 'react-bootstrap'
import './Projects.scss'

// Images
import Typing_img from './../../images/typing_game.jpg'
import Portfolio from './../../images/Portfolio.jpg'
import Todo_app from './../../images/Todo_app.jpg'

const Projects = () => {
  return (
    <div className='projectsContainer' id='projects'>
      <h1>Projects</h1>
      <div className='cardContainer'>
        <Card id='card' style={{ width: '18rem' }}>
          <Card.Img variant='top' src={Typing_img} alt='React Game' />
          <Card.Body>
            <Card.Title>
              <h4>Typing Game</h4>
            </Card.Title>
            <Card.Text>React typing game with twist. Try it out!</Card.Text>
            <Button
              variant='secondary'
              id='button'
              target='_blank'
              href='https://tansuz.github.io/game/#/'>
              Check it out!
            </Button>
          </Card.Body>
        </Card>
        <Card id='card' style={{ width: '18rem' }}>
          <Card.Img
            variant='top'
            src={Portfolio}
            alt='Portfolio'
            style={{ width: '285px', height: '380px' }}
          />
          <Card.Body id='portfolio'>
            <Card.Title>
              <h4>Portfolio</h4>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card id='card' style={{ width: '18rem' }}>
          <Card.Img
            variant='top'
            alt='To Do app'
            src={Todo_app}
            style={{ width: '285px', height: '260px' }}
          />
          <Card.Body>
            <Card.Title>
              <h4>To Do app</h4>
            </Card.Title>
            <Card.Text>To Do app build with React. App uses MongoDB and Express server.</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Projects
