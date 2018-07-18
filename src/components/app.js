
import React from 'react';
import {Route} from 'react-router-dom';
import Home from './home/home.js';
import About from './about/about.js';
import Contact from './contact/contact.js';
import Sponsers from './contact/sponsers.js';
import Blog from './blog/dashboard.js';
import Gallery from './gallery/gallery.js';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>


        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/sponsers' component={Sponsers} />
          <Route exact path='/gallery' component={Gallery} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
