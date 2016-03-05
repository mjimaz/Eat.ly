import { connect } from 'react-redux';
import { deleteFood, setMeal, addFoodIds } from '../actions/index.jsx';
import SelectFood from '../components/Main/SelectFood.jsx';

//Manages data for the SelectFood component

//Maps the state's user object and selectedFoods value to the 'selectedFoods'
//and 'user' prop on the SelectFood component
const mapStateToProps = (state, ownProps) => {
  return {
    selectedFoods: state.selectedFoods,
    user: state.user
  }
}

//Injects 3 methods as props to SelectFood component. The first, remove food,
//deletes a food from that view if selected by dispatching the deletion.
//The second will send completely logged meals to our server for storing and
//also save them in our state by dispatching. The third method will send any
//unique foodIds to our server for storage and add them to the user.foods object
//on our state
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		removeFood: (food) => {
      dispatch(deleteFood(food));
    },

    sendMeal: (meal) => {
      $.post( "/meals", {"meal": meal})
      .done((res) => {
        dispatch(setMeal(res));
      })
      .fail((res) => {
        console.log('error: ', res);
      });
    },

    sendFoodItems: (foodIds) => {
      let getFoodIds = foodIds.map(id => Promise.resolve($.post('/food_id', {'food_id':id})));
      return Promise.all(getFoodIds)
      .then((resultsStrings) => {
        let foodItemObjs = resultsStrings.map(s => JSON.parse(s));
        let foodItemsLookup = _.mapKeys(foodItemObjs, foodFields => {
          return foodFields['item_id'];
        });
        dispatch(addFoodIds(foodItemsLookup));
      })
      .catch((error) => {
        console.log('error ', error);
      });
    }
  };
}

const SelectFoodContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFood)

export default SelectFoodContainer;
