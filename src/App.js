import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Contact } from './components/Contact';
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
          <Route path="/skills" component={ Skills } />
          <Route exact path="/about" component={ About }>
            <About />
          </Route>
          <Route exact path="/contact" component={ Contact }>
            <Contact />
          </Route>
        </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;