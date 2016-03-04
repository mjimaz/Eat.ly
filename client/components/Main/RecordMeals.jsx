import React from 'react'
import SearchContainer from '../../containers/SearchContainer.jsx';
import SelectFoodContainer from '../../containers/SelectFoodContainer';


const RecordMeals = () => {
	return (
			<div className = 'record-meals'>
        <div className = 'row'>
          <div className = 'col-md-12'>
            <div className = 'col-md-6'>
              <SearchContainer />
            </div>
            <div className = 'col-md-6 select-food-container'>
              <SelectFoodContainer />
            </div>
          </div>
        </div>
			</div>
		);
}

export default RecordMeals;
