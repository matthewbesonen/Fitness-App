import React from "react";
import "./App.css";
import Button from "./Button.js";
import Radio from "./Radio.js";
import ReactDOM from 'react-dom';
import axios from 'axios';
import Api from "./Api";
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      age: 0,
      weight: 0,
      height: 0,
      genderSelectedOption: "",
      unitSelectedOption: "",
      bmi: 0,
      bmiCategory: "",
      meals: "",
    };
 
    //Binding Handlers
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleUnitChange = this.handleUnitChange.bind(this);
    this.handleBmiChange = this.handleBmiChange.bind(this);
    this.handleBmiCategoryChange = this.handleBmiCategoryChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this);
    
  } //end of constructor
 
  //Handlers
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
 
  handleAgeChange(event) {
    this.setState({ age: event.target.value });
  }
 
  handleWeightChange(event) {
    this.setState({ weight: event.target.value});
  }
 
  handleHeightChange(event) {
    this.setState({ height: event.target.value});
  }
 
  handleGenderChange(event) {
    this.setState({genderSelectedOption: event.currentTarget.value});
  }

  handleUnitChange(event) {
    this.setState({unitSelectedOption: event.currentTarget.value});
  }

  handleBmiChange() {
   this.setState = this.calculateBMI();
 }

  handleBmiCategoryChange() {
    this.setState = this.calculateBMICategory();
  }
 
  handleSubmit(event) {

    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (typeof data === "object") {
          //console.log({ data });
          this.setState({
            meals: data.meals[0].strMeal + "\n" + data.meals[0].strSource,
          });
        }
      });

    //Printing the state values
    window.alert("A name was submitted: " + this.state.name +
          "\nA age was submitted: " + this.state.age +
          "\nA weight was submitted: " + this.state.weight +
          "\nA height was submitted: " + this.state.height +
          "\nA Gender was submitted: " + this.state.genderSelectedOption +
          "\nHere's a meal we think you'll enjoy! If there's nothing here, hit the submit button again.\n" +
        "Recipe: " +
        this.state.meals
          );
    event.preventDefault();
  }
 
  handleClear() {
    this.setState({ name: ""});
    this.setState({ age: ""});
    this.setState({ weight: ""});
    this.setState({ height: ""});
    this.setState({ unitSelectedOption: "" });
    this.setState({ genderSelectedOption: "" });
  }
 

  //Calculating functions:
  calculateBMI() {
    if (this.state.unitSelectedOption == "Standard")
      this.state.bmi = (
        (703 * (this.state.weight / Math.pow(this.state.height, 2)))
      );
    else //Metric
    this.state.bmi = (
        (this.state.weight / Math.pow(this.state.height, 2))
      );
  }

  calculateBMICategory() {
    if (this.state.bmi < 18.5) {
      this.state.bmiCategory = "Underweight";
    }
    else if ((this.state.bmi >= 18.5) && (this.state.bmi <= 24.9)) {
      this.state.bmiCategory = "Normal Weight";
    }
    else if ((this.state.bmi >= 25) && (this.state.bmi <= 29.9)) {
      this.state.bmiCategory = "Overweight";
    }
    else {
      this.state.bmiCategory = "Obese";
    }
  }
 
  calculateRMR() {
    if(this.state.unitSelectedOption == "Standard")
     if (this.state.genderSelectedOption == "Male")
        return (
          (9.99 * (this.state.weight * 0.453592)) +
          (6.25 * ((this.state.height * 0.0254) * 100)) -
          (4.92 * this.state.age + 5)
        );
      else
        return (
          (9.99 * (this.state.weight * 0.453592)) +
          (6.25 * ((this.state.height * 0.0254) * 100)) -
          (4.92 * this.state.age + 161)
        );
    else //Metric
      if (this.state.genderSelectedOption == "Male")
        return(
          (9.99 * this.state.weight) +
          (6.25 * (this.state.height * 100)) -
          (4.92 * this.state.age + 5)
        );
      else
        return(
          (9.99 * this.state.weight) +
          (6.25 * (this.state.height * 100)) -
          (4.92 * this.state.age + 161)
        );
  }

  //Rendering the App:
  render() {
    return (
      <div>
        <h1>Welcome to the Health and Fitness Calculator!</h1>
        <p>
          Please enter some information about yourself to find out your BMI and
          more.
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <br/>
          </label>
 
          <label>
            Age:
            <input
              type="text"
              value={this.state.age}
              onChange={this.handleAgeChange}
            />
            <br/>
          </label>
 
          <label>
            Weight (Pounds / KiloGrams):
            <input
              type="text"
              value={this.state.weight}
              onChange={this.handleWeightChange}
            />
            <br/>
          </label>
 
          <label>
            Height (Inches / Meters):
            <input
              type="text"
              value={this.state.height}
              onChange={this.handleHeightChange}
            />
          </label>
 
 
          <div>
            <p>Please select your Gender</p>
            <Radio
              value="Male"
              label="Male"
              id="1"
              checked={this.state.genderSelectedOption === "Male"}
              onChange={this.handleGenderChange}
            >
              Male
            </Radio>
            <Radio
              value="Female"
              label="Female"
              id="2"
              checked={this.state.genderSelectedOption === "Female"}
              onChange={this.handleGenderChange}
            >
              Female
            </Radio>
          </div>
 
          <div>
            <p>What measurement system are your units in?</p>
            <Radio
              value="Metric"
              label="Metric"
              id="1"
              checked={this.state.unitSelectedOption === "Metric"}
              onChange={this.handleUnitChange}
            >
              Metric
            </Radio>
            <Radio
              value="Standard"
              label="Standard"
              id="2"
              checked={this.state.unitSelectedOption === "Standard"}
              onChange={this.handleUnitChange}
            >
              Standard
            </Radio>
            <br/>
          </div> 
 
          <input type="submit" value="Submit" />
          
        </form>
 
        <Button text="Clear" onClick={this.handleClear}>
          My Button
        </Button>
 
        <br/>
        <br/>

        <label>
            Body Mass Index:
            <input
              type="text"
              onChange={(this.calculateBMI(), this.calculateBMICategory())}
              value={this.state.bmi}
            />
            <p>You are {this.state.bmiCategory}</p>
        </label>
 
     
        <label>
          Resting Metabolic Rate:
          <input
            type="text"
            onChange={this.calculateRMR()}
            value={this.calculateRMR()}
          />
        </label>

        <label>
          <br/>
          <br/>
          Here are some previews of meals we think you'd enjoy. Follow the link
          to get the full recipe! 
        </label>
        <Api/>
      </div>
    );
  }
}
 
export default App;

