import React, { Component } from 'react'
import Todo from "./components/Todo/Todo"

export class App extends Component {

  state ={
    isAuth : false
  }
handleOnChange=(event)=>{

}


handleOnSubmit =(event)=>{

}


  render() {
    const {isAuth} =this.state;

    let showComponent = isAuth ? (<Todo />) :(

      <form onSubmit ={}>
      {" "}
    <input type="text" placeholder="enter email" name="email" onChange ={this.handleOnchange}/> 
    <br />{" "}

    <input type = "text" placeholder="enter Password" onChange ={this.handleOnchange}/>
    <br />
    {" "}
    <button>Sign Up</button>
    </form>
      );
    return <div style={{textAlign:"center", marginTop:"15%"}}>
        {showComponent}
      </div>
    
  }
}

export default App
