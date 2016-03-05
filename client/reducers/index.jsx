import { combineReducers } from 'redux'
//This reducer is used to configure the user object or one of it's
//properties, such as meal or food
const configureUser = (state = null, action) => {
	switch(action.type) {
		case 'SET_USER':
			return action.userObj === "Invalid User" ? state : action.userObj;
		case 'SET_MEAL':
		  let mealsArr = [].concat(action.meal, state.meals);
			return Object.assign({}, state, {meals: mealsArr});
		case 'ADD_FOOD_ID':
	     let totalFoods = Object.assign({}, state.foods, action.foodIds);
	     return Object.assign({}, state, {foods: totalFoods});
    case 'REMOVE_USER':
        return {};
    case 'REMOVE_MEAL':
	    var newState = {};
		  newState.foods = state.foods;
		  newState.meals = action.payload.data
		  newState.userInfo = state.userInfo;
		  return newState;

		case 'Update_User_Profile':
		  var newState = {};
		  newState.foods = state.foods;
		  newState.meals = state.meals;
		  newState.userInfo = action.payload.data;
		  return newState;

		default:
				return state;
	}
}


//This reducer is used to configure the results obtained by searching for
//a food element to log. This is a list of queried foods obtained from the
//server, which receives that list from the Nutrionix API
const configureSearch = (state = [], action) => {
	switch(action.type) {
		case 'SET_SEARCH_RESULTS':
			return action.searchResults;
		default:
			return state;
	}
}

//This reducer is used to configure the results which the user has added
//and staged for logging.
const configureSelectedFood = (state = {}, action) => {
	switch(action.type) {
		case 'SELECT_FOOD':
			let id = action.selectedFood['item_id'];
			let foodObj = {
				[id]: action.selectedFood
			}
			return Object.assign({}, state, foodObj);
		case 'REMOVE_FOOD':
			return _.omit(state, action.selectedFood['item_id']);
		default:
			return state;
	}
}

//This reducer is used to configure parameters on the Progress Line Chart
const configureProgress = (state = {timeWindow: 7, filter: 'nf_calories'}, action) => {
	switch(action.type) {
		case 'PROGRESS_TIME_SET':
			return Object.assign({}, state, {timeWindow: action.timeWindow});
		case 'PROGRESS_FILTER_SET':
			return Object.assign({}, state, {filter: action.filter});
		default:
			return state;
	}
}

//This reducer is used to configure the page on the AuthContainer (whether its
//the login page or the signup page)
const configurePage = (state = 'Login', action) => {
	switch(action.type) {
		case 'CHANGE_PAGE':
			return action.newPage;
		default:
			return state;
	}
}

const selectTab = (state = "a", action) => {
	switch (action.type) {
		case 'CHANGE_TAB':
			return action.tab
		default: 
			return state;
	}
}

const foodAppHandler = combineReducers({
	user: configureUser,
	page: configurePage,
	tab: selectTab,
	foodQueries: configureSearch,
	selectedFoods: configureSelectedFood,
	progressBar: configureProgress
	// updateUserProfile: updateUserProfile
	// deleteMealReducer: deleteMealReducer 
});

export default foodAppHandler;
