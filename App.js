import React, { Component, PureComponent } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      obj: {a: 1}
    }

    this.changeProp = () => {
      this.state.obj.a = 2;
      this.setState({
        obj: this.state.obj
      })
    };

    this.changeObj = () => {
      this.setState({
        obj: {a: 3}
      })
    };

    this.changeNothing = () => {
      this.setState(this.state)
    };
  }

  render() {
    console.log('Render App.');
    return <div>
      <div>
        This app demo:<br/>
        1. Call <b>this.setState()</b> will always trigger render, even the state is not changed.<br/>
        2. The parent component re-render will always re-render the child non-pure component, even there is no property change if we don't check in shouldComponentUpdate()<br/>
        3. PureComponent will re-render only if the property change.<br/>
        <br/>
        <br/>
      </div>
      <button onClick={this.changeProp.bind(this)}>Change prop</button>
      <button onClick={this.changeObj.bind(this)}>Change Obj</button>
      <button onClick={this.changeNothing.bind(this)}>Change Nothing</button>
      <MyComponent1 p1={this.state.obj}></MyComponent1>
      <MyPureComponent1 p1={this.state.obj}></MyPureComponent1>
    </div>;
  }
}

class MyComponent1 extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  render() {
    console.log('Render MyComponent1.');
    return <div>MyComponent1: {JSON.stringify(this.props.p1)}</div>;
  }
}

class MyPureComponent1 extends PureComponent {
  render() {
    console.log('Render MyPureComponent1.');
    return <div>MyPureComponent1: {JSON.stringify(this.props.p1)}</div>;
  }
}

export default App;
