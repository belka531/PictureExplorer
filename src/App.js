import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'
import { Route } from 'react-router-dom'
import PicturesListContainer from './components/PicturesListContainer';
import PicturePageContainer from './components/PicturePageContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path="/pictures/:id" component={PicturePageContainer} />
          <Route exact path="/" component={PicturesListContainer} />  
        </div>
      </Provider>
    );
  }
}

export default App;
