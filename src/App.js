import React from 'react';
import { Provider } from 'react-redux'
import { Globalstyle } from './style'
import { GlobalIcon } from './statics/iconfont/iconfont'
import Header from './common/header'
import store from './store';
function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <Globalstyle />
        <GlobalIcon />
        <Header></Header>
      </div>
    </Provider>
  );
}

export default App;
