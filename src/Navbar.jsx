import React,{Component} from "react";
 
class Navbar extends Component {
  clickHandler = (event) => {
    console.log("Button click!");
  };
 
  render() {
    return (
      <button type="button" onClick={this.clickHandler}>
       Click here!
      </button>
    );
  }
 }
export default Navbar;