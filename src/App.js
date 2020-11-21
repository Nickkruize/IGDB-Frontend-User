// import React, { Component } from 'react';
// import { Route, Switch } from 'react-router';
// import {Layout} from './Layout';

// import './App.css';

// export default class App extends Component {
//     static displayName = App.name;

//     render() {
//       return (
//           <Layout>
//             <Switch>
//               <Route exact path='/' component={Home} />

//               <Route path='/AllGames' component={AllGames} />
//               <Route path='/AllPublishers' component={AllPublishers} />
//               <Route path='/AllGenres' component={AllGenres} />
//               <Route path='/Game/:id' component={Game} />
//               <Route path='/Publisher/:id' component={Publisher} />
//               <Route path='/Genre/:id' component={Genre} />

//               <Route exact path='/Login' component={Login}/>
//               <Route exact path="/Register" component={Register}/>
//               <Route exact path="/Denied" component={AccessDenied}/>
//               <Route component={NoMatch} />
//               </Switch>
//           </Layout>
//       );
//   }
// }

import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './Layout';
import { Home } from './Home';
import { Game } from './Game';
import { AllGames } from './AllGames';
import { Publisher } from './Publisher';
import { AllPublishers } from './AllPublishers';
import { Genre } from './Genre';
import { AllGenres } from './AllGenres';
import {Login} from './Login';
import {Register} from './Register';
import {AccessDenied} from './AccessDenied';
import {NoMatch} from './NoMatch';
import './App.css';

export default class App extends Component{
 static displayname = App.name

  render(){
    return (  
      <Layout>
      <Switch>
        <Route exact path='/' component={Home} />

        <Route path='/AllGames' component={AllGames} />
        <Route path='/AllPublishers' component={AllPublishers} />
        <Route path='/AllGenres' component={AllGenres} />
        <Route path='/Game/:id' component={Game} />
        <Route path='/Publisher/:id' component={Publisher} />
        <Route path='/Genre/:id' component={Genre} />

        <Route exact path='/Login' component={Login}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/Denied" component={AccessDenied}/>
        <Route component={NoMatch} />
      </Switch>
      </Layout>
  );
  }
}
