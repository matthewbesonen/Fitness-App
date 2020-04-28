import React from 'react';
 
 
class Radio extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: ''
    };
  this.handleRadio = this.handleRadio.bind(this);
}
 
  handleRadio(event) {
    this.setState({
      selectedOption: event.currentTarget.value
    });
  }
  
  render() {
    return (
      <div>
        
        <p>Please select your Sex:</p>
 
        <input type="radio"
               value="Yes"
               checked={this.state.selectedOption === "Yes"}
               onChange={this.handleRadio} />Male
 
        <br/>
 
        <input type="radio"
               value="No"
               checked={this.state.selectedOption === "No"}
               onChange={this.handleRadio}/>Female
        
        <h3>this.state.selectedOption: {this.state.selectedOption}</h3>
      </div> 
    );
  }
}
  export default Radio;
 
 

