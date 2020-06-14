import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

import history from '../utilities/history'
import { observer } from 'mobx-react';

import { StoreProvider} from '../stores/storeContext';
import rootStore from '../stores/rootStore';

const App = observer(() => {
  return (
    <StoreProvider value={rootStore}>
      <Router>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'/home'} component={Home} />
                <Route path={history.location.pathname + '/home'} component={Home}/>
                      
            </Switch>
      </Router> 
    </StoreProvider>
    );
});

export default App;
