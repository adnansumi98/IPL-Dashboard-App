import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import LatestMatch from './components/LatestMatch'
import MatchCard from './components/MatchCard'
import NotFound from './components/NotFound'
import TeamCard from './components/TeamCard'
import TeamMatches from './components/TeamMatches'

const App = () => (
  <Switch>
    <Route exact path="/" component={<Home />} />
    <Route exact path="/LatestMatch" component={<LatestMatch />} />
    <Route exact path="/MatchCard" component={<MatchCard />} />
    <Route exact path="/TeamCard" component={<TeamCard />} />
    <Route exact path="/TeamMatches" component={<TeamMatches />} />
    <Route component={<NotFound />} />
  </Switch>
)

export default App
