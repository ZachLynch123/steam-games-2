import React from 'react';
import UserContainer from './UserContainer';
import { Route } from 'react-router-dom'
import Home from './Home'
// import steamApiKey from './keys/keys.js'

class App extends React.Component {
  
   
    render() {
        return (
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/user/:steamid" component={UserContainer} />
          </div>
        );
      }
}


export default App;
