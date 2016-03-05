import { connect } from 'react-redux';
import { deleteMeal } from '../actions/index.jsx';
import Meal from '../components/Main/Meal.jsx';

//It maps the state.user object to the
//user prop on Main

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveClick: (mealId) => {
      dispatch(deleteMeal(mealId));
    }
  }
}

const MealsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Meal)

export default MealsContainer;
