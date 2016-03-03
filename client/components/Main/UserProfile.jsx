import React from 'react';
import TextField from 'material-ui/lib/text-field';


const UserProfile = ({user}) => {
	return (
    <div class="row">
	    <form class="col s12">
        <TextField
          hintText="First Name"
          defaultValue={user ? user.userInfo.username : 'test' }
          floatingLabelText="Enter First Name"
        />
        <TextField
          hintText="Last Name"
          defaultValue="Aljimaz"
          floatingLabelText="Enter Last Name"
        />
        <br/>
        <TextField
          hintText="Address"
          defaultValue=""
          floatingLabelText="Enter Address"
        />
	    </form>
    </div>
	)
}
export default UserProfile;