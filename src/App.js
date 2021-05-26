import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
//import { Router } from 'react-router';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/competences' component={Knowledges} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      
    </div >
  );
};

export default App;