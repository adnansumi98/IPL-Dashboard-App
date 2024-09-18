import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamsObject: [],
    isloading: true,
  }

  async componentDidMount() {
    await fetch('https://apis.ccbp.in/ipl', {method: 'GET'})
      .then(response => response.json())
      .then(data => {
        const convertedObject = data.teams.map(eachObj => ({
          id: eachObj.id,
          name: eachObj.name,
          teamImageUrl: eachObj.team_image_url,
        }))
        // console.log(result)
        return convertedObject
      })
      .then(convertedObject => {
        this.setState({teamsObject: convertedObject, isloading: false})
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const {isloading, teamsObject} = this.state

    return (
      <div className="home-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-image"
          />
          <h1 className="logo-heading">IPL DashBoard</h1>
        </div>
        {isloading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <ul className="teamcard-container">
            {teamsObject.map(eachObj => {
              const {name, teamImageUrl, id} = eachObj
              return (
                <TeamCard
                  key={id}
                  id={id}
                  name={name}
                  imageUrl={teamImageUrl}
                />
              )
            })}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
