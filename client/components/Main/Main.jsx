import React from 'react';
import NavBarContainer from '../../containers/NavBarContainer.jsx';
import AppBar from 'material-ui/lib/app-bar.js';
import FlatButton from 'material-ui/lib/flat-button';
import Avatar from 'material-ui/lib/avatar';
import styles from 'material-ui/lib/styles';

const colors = styles.Colors;


const Main = ({user, tab, logoutUser, goToTab}) => {

  return (
    <div className='main-page'>
      <AppBar 
        style={{backgroundColor:"rgb(139,189,7)"}} 
        title="Eat.ly" 
        titleStyle={{"textAlign":"center", "fontWeight":800}}
        iconElementRight={ 
          <FlatButton 
            label="Log Out" 
            color={colors.lightBlue50} 
            onClick={logoutUser}/> 
        }
        iconElementLeft={
          <Avatar color={colors.lightBlue500} 
                  src={user.userInfo.profile_pic.data}
                  backgroundColor={colors.lightBlue50} 
                  onClick={() => { goToTab("d"); }} >
            <span className="user-greeting">
              {user && user.userInfo && user.userInfo.username ? "Welcome, " + user.userInfo.firstName: null}
            </span>  
          </Avatar>
        }
      />
      <NavBarContainer />
    </div>
    );
}

export default Main;
