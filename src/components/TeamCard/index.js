import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {id, imageUrl, name} = props

  return (
    <li className="team-card-container">
      <Link to={`${id}`}>
        <div className="team-contents-container">
          <img src={imageUrl} alt={name} className="team-card-image" />
          <h1 className="team-card-name">{name}</h1>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
