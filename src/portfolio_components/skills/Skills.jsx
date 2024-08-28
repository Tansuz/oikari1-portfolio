// Styling & Bootstrap
import './Skills.scss'
import { Badge } from 'react-bootstrap'

// Icons
import ReactIcon from './../../images/React-icon.png'
import Javascript from './../../images/javascript.png'
import CssIcon from './../../images/cssIcon.png'
import NodeIcon from './../../images/nodeIcon.png'
import MongoIcon from './../../images/mongoDB.png'
import ReduxIcon from './../../images/reduxIcon.png'
import HTMLIcon from './../../images/htmlIcon.png'
import githubIcon from './../../images/githubIcon.png'

const Skills = () => {
  return (
    <div className='SkillsContainer' id='skills'>
      <h1>Skills</h1>
      <div className='itemContainer'>
        <div className='Badges'>
          <Badge bg='light' className='customBadge'>
            <img src={ReactIcon} alt='React icon' /> <p>ReactJS</p>
          </Badge>
          <Badge bg='light' className='customBadge'>
            <img src={Javascript} alt='Javascript icon' />
            <p>Javascript</p>
          </Badge>
          <Badge bg='light' className='customBadge'>
            <img src={CssIcon} alt='CSS icon' />
            <p>CSS/SCSS</p>
          </Badge>
          <Badge bg='light' className='customBadge'>
            <img src={NodeIcon} alt='NodeJS icon' />
            <p> NodeJS</p>
          </Badge>
          <Badge bg='light' className='customBadge'>
            <img src={MongoIcon} alt='MongoDB icon' />
            <p> MongoDB</p>
          </Badge>
          <Badge bg='light' className='customBadge'>
            <img src={ReduxIcon} alt='Redux icon' />
            <p>Redux</p>
          </Badge>
          <Badge bg='light' className='customBadge'>
            <img src={HTMLIcon} alt='HTML icon' />
            <p> HTML</p>
          </Badge>
          <Badge bg='light' className='customBadge'>
            <img src={githubIcon} alt='github icon' />
            <p> GIT</p>
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Skills
