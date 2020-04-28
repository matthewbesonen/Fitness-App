import React from "react";
 
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
    };
 
    this.handleButton = this.handleButton.bind(this);
  }
 
  handleButton(event) {
    alert("Button was clicked");
    event.preventDefault();
  }
 
  render() {
    return <button 
    onClick={this.props.onClick}>{this.props.text}
    </button>;
  }
}
 
export default Button;
 
 
 
 

