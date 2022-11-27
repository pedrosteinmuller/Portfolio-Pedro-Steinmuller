import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contato from './components/Contato';
import Sobremim from './components/Sobremim';
import Projects from './components/Projects';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contato" component={ Contato } />
          <Route exact path="/sobremim" component={ Sobremim }>
            <Sobremim />
          </Route>
        </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;