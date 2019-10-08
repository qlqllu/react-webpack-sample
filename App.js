import React, { Component, PureComponent } from 'react';
import Render1 from './Render1';
import Render2 from './Render2';
import Render3 from './Render3';

class App extends Component {

  render() {
    return <div>
      <Render1/>
      <hr/>
      <Render2/>
      <hr/>
      <Render3/>
    </div>
  }
}

export default App;
