import React from 'react';
import axios from 'axios';

class Api extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         apiData: []
         }
    }

      componentDidMount() {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=d`)
          .then(res => {
            const apiData = res.data;
            this.setState({ apiData });
          })
      }
    
      render() {
        if (this.state.apiData.meals)
        return (
          <ul>
            {this.state.apiData.meals.map((meal) => (
              <li>
                {meal.strMeal}
                <br></br>
                <br></br>
  
                {meal.strSource}
                <br></br>
                <br></br>
  
                {meal.strInstructions}
                <br></br>
                <br></br>
                <br></br>
              </li>
            ))}
          </ul>
        );
        else
            return null;    
      }

}

export default Api;