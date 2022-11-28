import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Equipas from './pages/Equipas'
import Jogos from './pages/Jogos'
import AboutUs from './pages/About_us'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />      
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/equipas">
            <Equipas />
          </Route>
          <Route path="/jogos">
            <Jogos />
          </Route>
          <Route path="/about_us">
            <AboutUs />
          </Route>
        </Container>
      </Switch>
      <Footer /> 
    </Router>
  );
}

export default App;
