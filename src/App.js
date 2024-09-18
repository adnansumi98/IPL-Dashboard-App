<<<<<<< HEAD
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
// import LatestMatch from './components/LatestMatch'
// import MatchCard from './components/MatchCard'
// import TeamCard from './components/TeamCard'
// import TeamMatches from './components/TeamMatches'
=======
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'
>>>>>>> Old repo

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
<<<<<<< HEAD
    {/* <Route exact path="/LatestMatch" component={LatestMatch} />
    <Route exact path="/MatchCard" component={MatchCard} />
    <Route exact path="/TeamCard" component={TeamCard} />
    <Route exact path="/TeamMatches" component={TeamMatches} /> */}
=======
    <Route path="/team-matches/:id" component={TeamMatches} />
>>>>>>> Old repo
    <Route component={NotFound} />
  </Switch>
)

export default App
