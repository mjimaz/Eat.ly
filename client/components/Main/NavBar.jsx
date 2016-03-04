import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs.js';
import Tab from 'material-ui/lib/tabs/tab.js';
import CalorieLog from './CalorieLog.jsx';
import RecordMeals from './RecordMeals.jsx';
import Summary from './Summary.jsx';
import UserProfile from '../../containers/UserProfileContainer.jsx';

const NavBar = ({user, tab, goToTab}) => {

	return (
		<div className="nav-bar">
				<Tabs tabItemContainerStyle={{backgroundColor:"rgb(139,189,7)"}}
							value={tab}>
					<Tab label="Summary"
							 value="a"
							 onClick={() => {goToTab("a")}}	>
						<Summary user={user} />
					</Tab>
					<Tab label="Calorie Log"
					     value="b"
					     onClick={() => {goToTab("b")}}>
						<CalorieLog user={user} />
					</Tab>
					<Tab label="Record Meals"
							 value="c"
							 onClick={() => {goToTab("c")}}>
						<RecordMeals user={user} />
					</Tab>
					<Tab label="My Profile"
							 value="d"
							 onClick={() => {goToTab("d")}}>
						<UserProfile  />
					</Tab>
				</Tabs>
		</div>
		);
}

export default NavBar;
