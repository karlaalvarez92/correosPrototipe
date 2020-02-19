import React, {Component} from 'react';
import Container from './Components/Container/Container'
import './App.css';
import data from './data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data.postales,
    }
  }

  // componentDidMount= () => {
  //   let data= data.postales
  //   data.map(el =>
  //     this.setState({
  //       data: el,
  //     })
  //   )
  // }

  render(){
  return (
   
   <Container data = {this.state.data}/>

  );
}
}

export default App;
