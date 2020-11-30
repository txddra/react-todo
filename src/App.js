import React, { Component } from 'react'
import Todo from "./components/Todo/Todo"

export class App extends Component {

  state ={
    isAuth : false
  }
  render() {
    const {isAuth} =this.state;

    let showComponent = isAuth ? (<Todo />) :(

      <form>
      {" "}
    <input type="text" placeholder="enter email"/> 
    <br />{" "}

    <input type = "text" placeholder="enter Password"/>
    <br />
    {" "}
    <button>Sign Up</button>
    </form>
      );
    return <div style={{textAlign:"center"}}>
        {showComponent}
      </div>
    
  }
}

export default App
