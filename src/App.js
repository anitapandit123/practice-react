
import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';
class App extends Component {
  state = {
    persons : [
      { name: "Anita", age: 28},
      { name:"Aashvi", age: 1}
    ],
    otherstate: 'some other things goes here'
  }

  switchStateHandler = (newName,newAge) => {
    // console.log("switch clicked")
 this.setState( {
  persons : [
    { name:newName, age: newAge},
    { name:"Spark", age: 4}
  ]
 } )
  }

  nameChangeHandler = (trackEvent) =>{
    this.setState({
      persons: [
        { name:'newname',age:15},
        { name:trackEvent.target.value, age: 6}
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'ponter'
    };
    return (
      <div className="App">
        <h1>HI Heading 1</h1>
        <button
        style = {style}
         onClick={this.switchStateHandler.bind(this,'Bishal','36')}>Switch text</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          clickListener={this.switchStateHandler.bind(this,'changed to Sofiya','25')}
          nameChanged={this.nameChangeHandler}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Otdoor</Person>
      </div>
    );
    return React.createElement('div', {className: App}, 'h1', 'HI I am ')
  }
}

export default App;
