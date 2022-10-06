import React, { Component } from "react";
import "./MealDetail.css";
import MealService from "../../services/MealService";
import Spinner from "../Spinner/Spinner";


const mealService = new MealService();

export default class MealDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            mealDetail:[]
    };
    }
    componentDidMount(){
        let id=this.props.match.params.id;
        this.getMealDetail(id);
    }
    async getMealDetail(id){
        try{
            let mealDetail = await mealService.getMealDetail(id);
            mealDetail = mealDetail.data.meals;
            this.setState({
                mealDetail
            });
        }
        catch(err){
            console.log(err);
        }
    }
    
