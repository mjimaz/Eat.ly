import { connect } from 'react-redux';
import { changeTab } from '../actions/index.jsx';
import NavBar from '../components/Main/NavBar.jsx';


const mapStateToProps = (state) => {
  return {
    user: state.user,
    tab: state.tab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToTab: (tabValue) => {
      dispatch(changeTab(tabValue));
    }
  }
}

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)

export default NavBarContainer;