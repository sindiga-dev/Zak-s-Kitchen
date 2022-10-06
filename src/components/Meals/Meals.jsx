import React, { Component } from "react";
import "./Meals.css";
import Meal from "../Meal/Meal";
import MealContext from "../../context/MealContext";
import Spinner from "../Spinner/Spinner";

export default class Meals extends Component {
    handleBackButton=()=>{
        //meal app /
        this.props.history.push('/meal-app');
    };
    renderMeals(context) {
        let { meals, favoriteMeals } = context;
        if (meals.length > 0) {
          return (
            <div className="meals-container">
              {meals.map(meal => (
                <React.Fragment key={meal.idMeal}>
                  <Meal
                    meal={meal}
                    favoriteMeals={favoriteMeals}
                    context={context}
                  />
                </React.Fragment>
              ))}
            </div>
          );
        } else {
          return <Spinner />;
        }
      }