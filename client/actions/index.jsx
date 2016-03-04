import axios from 'axios';

export const Update_User_Profile = 'Update_User_Profile';

//Used to assign the user object from the server to the state
export const setUser = (userObj) => {
	return {
		type: 'SET_USER',
		userObj
	};
};

//Update User Profile
export const updateUserProfile = (user) => {
  const request = axios.put('/user', user);
  return {
    type: Update_User_Profile,
    payload: request
  };
};

//Used to set the results obtained from searching for a food to
//log. All results are assigned to foodQueries key on state object
export const setSearchResults = (searchResults) => {
  return {
    type: 'SET_SEARCH_RESULTS',
    searchResults
  };
};

//Used to set the filter option on the Progres line chart ('calories, protein, etc')
//Used to add a food element to the selectedFood box, which are
//food entries that the user is about to log in the 'record meals'
//page but need to assign a quantity to before storing
export const setFood = (selectedFood) => {
  return {
    type: 'SELECT_FOOD',
    selectedFood
  };
};

//Used to remove a food element from the selectedFood box described above
export const deleteFood = (selectedFood) => {
	return {
		type: 'REMOVE_FOOD',
		selectedFood
	};
};

//Used to add a meal object to the user.meals array on the state.
export const setMeal = (meal) => {
  return {
    type: 'SET_MEAL',
    meal
  };
};

//Used to add a new foodId, which will be stored as a key on the user.foods
//array while the value is the complete Nutritional profile of that food
export const addFoodIds = (foodIds) => {
  return {
    type: 'ADD_FOOD_ID',
    foodIds
  };
};

//Used to remove the user object from the state, resulting in a logout
export const removeUser = () => {
  return {
    type: 'REMOVE_USER'
  };
};

//Used to set the time window on the Progress line chart
export const setTimeOnProgress = (timeWindow) => {
  return {
    type: 'PROGRESS_TIME_SET',
    timeWindow
  };
};

//Used to set the filter option on the Progres line chart ('calories, protein, etc')
export const setFilterOnProgress = (filter) => {
  return {
    type: 'PROGRESS_FILTER_SET',
    filter
  };
};

//Used to change the page on the Auth side of the app (whether it's signup or login)
export const changePage = (newPage) => {
  return {
    type: 'CHANGE_PAGE',
    newPage
  };
};

// Used to change to the user profile tab if the avatar component is clicked
export const changeTab = (tabValue) => {
  return {
    type: 'CHANGE_TAB',
    tab: tabValue
  };
};

// Takes the index of the meal to be removed
export const deleteMeal = (mealId) => {
  return {
    type: 'REMOVE_MEAL',
    mealId: mealId
  };
};