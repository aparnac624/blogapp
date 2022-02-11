import React from 'react';
import { Box } from '@material-ui/core'; 

import { BrowserRouter , Switch , Route } from 'react-router-dom';

//components
import Header from './components/Header';
import Home  from './components/home/Home'; 
import DetailView  from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';
import Login from './components/login/Login';
import Signup from './components/signup/SignUp';


function App() {
  return (
      <BrowserRouter>
        <Header />
        <Box style={{margintop: 64}}>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/details' component={DetailView} />
              <Route exact path='/create' component={CreateView} />
              <Route exact path='/update' component={UpdateView} />
              <Route exact path='/loginpage' component={Login} />
              <Route exact path='/signuppage' component={Signup} />
          </Switch>
        </Box>
      </BrowserRouter>
      
  
  );
}

export default App;
