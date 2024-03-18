import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './child' ;

class App extends Component{

  constructor(){
    super();
    this.state ={
      name:'john'
    }
    console.log('constructor');
  }

  componentWillMount(){
    if(window.innerWidth < 500){
      this.setState({innerWidth:window.innerWidth})
    }
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillReceiveProps(){
    console.log('componentWillReceiveProps'); 
  }

  shouldComponentUpdate(nextProps,nextstate){
    console.log('shouldComponentUpdate'); 
    return true;
  }
  componentWillUpdate(){
    console.log(' componentWillUpdate'); 
  }
  changeState(){
    this.setState({name:'jill'})
  }

   render() {
     console.log('render here')
    return (
      <div className="App">
       name: {this.state.name}
        |innerWidth:{this.state.innerWidth}
        <Child name={this.state.name}/>
        <button onClick={this.changeState.bind(this)}>change State</button>
      </div>
    );
  }
}



export default App;
