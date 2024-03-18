import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Child extends Component{

  constructor(){
    super();
    console.log('Child constructor');
  }

  componentWillMount(){
    console.log('Child componentWillMount');
  }

  componentDidMount(){
    console.log('Child componentDidMount');
  }

  componentWillReceiveProps(){
    console.log('Child componentWillReceiveProps'); 
  }

  shouldComponentUpdate(nextProps,nextstate){
    console.log('Child shouldComponentUpdate'); 
    return true;
  }

  componentWillUpdate(){
    console.log('Child componentWillUpdate'); 
  }
   render() {
     console.log('Child render here')
    return (
      <div className="App">
      name: {this.props.name}
      </div>
    );
  }
}



export default Child;
