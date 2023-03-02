import React, { Component, PureComponent } from 'react';

class Render2 extends Component {
  constructor(){
    super();
    this.state = {a: 1}
  }

  render() {
    console.log('Render Render2.');
    return <div>
      This Component demo: <br/>
      The parent component's render does not cause the child component render.
      <PureComponent1>
        <PureComponent2 obj={{a: (new Date()).getTime()}}></PureComponent2>
      </PureComponent1>
    </div>
  }
}

class PureComponent1 extends PureComponent {
  constructor(){
    super();
    this.state = {a: 1}
  }
  render() {
    console.log('Render PureComponent1.');
    return <div>
      <button onClick={() => this.setState({a: this.state.a + 1})}>Change state</button>
      {this.state.a} <br/>
      PureComponent1 children: 
      {this.props.children}
    </div>;
  }
}

class PureComponent2 extends PureComponent {
  render() {
    console.log('Render PureComponent2.');
    return <div>PureComponent2: {JSON.stringify(this.props.obj)}</div>;
  }
}

export default Render2;
