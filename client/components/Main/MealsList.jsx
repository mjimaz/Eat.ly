import React from 'react';
import MealsContainer from '../../containers/MealsContainer.jsx';
import { connect } from 'react-redux';
import NutritionCounter from './NutritionCounter.jsx';


const MealsList = ({meals, foods}) => {
	return (
		<div className='meals-list'>
		  {meals.map((meal,i) => <MealsContainer meal={meal} foods={foods} index = {i} key={i} />)}
		</div>
	);
}

export default MealsList
