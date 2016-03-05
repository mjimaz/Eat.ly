import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUserProfile } from '../actions/index.jsx';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import Checkbox from 'material-ui/lib/checkbox';


class UserProfile extends Component {
  constructor(props){
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange( event, category ) {
    var checkbox_id = event.target.id;
    this.props.user.userInfo[category][checkbox_id] = !this.props.user.userInfo[category][checkbox_id];
  }

  handleSubmit( event ) {
    event.preventDefault();
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var location = $('#location').val();
    var weight = $('#weight').val();
    var weightGoal = $('#weightgoal').val();
    var paleo = $('#paleo')[0].checked;
    var vegan = $('#vegan')[0].checked; 
    var vegetarian = $('#vegetarian')[0].checked;
    var kosher = $('#kosher')[0].checked;
    var halal = $('#halal')[0].checked;
    var milk = $('#milk')[0].checked; 
    var eggs = $('#eggs')[0].checked; 
    var fish = $('#fish')[0].checked; 
    var shellfish = $('#shellfish')[0].checked; 
    var tree_nuts = $('#tree_nuts')[0].checked; 
    var peanuts = $('#peanuts')[0].checked; 
    var wheat = $('#wheat')[0].checked; 
    var soybeans = $('#soybeans')[0].checked; 
    var gluten = $('#gluten')[0].checked; 

    var user = {
      username: this.props.user.userInfo.username,
      firstName: firstname, 
      lastName: lastname,
      location: location,
      weight: weight,
      weightGoal: weightGoal,
      dietaryRestrictions: {
        paleo: paleo,
        vegan: vegan,
        vegetarian: vegetarian,
        kosher: kosher,
        halal: halal
      },
      allergies: {
        milk: milk,
        eggs: eggs,
        fish: fish,
        shellfish: shellfish,
        tree_nuts: tree_nuts,
        peanuts: peanuts,
        wheat: wheat,
        soybeans: soybeans,
        gluten: gluten
      }
    }
    this.props.updateUserProfile(user);
  }

  render(){
  return (
    <div class="row">
      <form class="col s12" onSubmit={this.handleSubmit}>
        <TextField
          id='firstname'
          hintText="First Name"
          defaultValue={this.props.user ? this.props.user.userInfo.firstName : '' }
          floatingLabelText="Enter First Name" />
        <TextField
          id='lastname'
          hintText="Last Name"
          defaultValue={this.props.user ? this.props.user.userInfo.lastName : '' }
          floatingLabelText="Enter Last Name" />
        <br/>
        <TextField
          id='location'
          hintText="Address"
          defaultValue={this.props.user ? this.props.user.userInfo.location : '' }
          floatingLabelText="Enter Address" />
        <br/>
        <TextField
          id='weight'
          hintText="Current Weight"
          defaultValue={this.props.user ? this.props.user.userInfo.weight : '' }
          floatingLabelText="Enter your current weight" />
        <TextField
          id='weightgoal'
          hintText="Goal Weight"
          defaultValue={this.props.user ? this.props.user.userInfo.weightGoal : '' }
          floatingLabelText="Enter your goal weight" />
        <br/><br/>
        Dietary Restrictions:
        <br/><br/>
        <Checkbox
          value={this.props.user ? this.props.user.userInfo.dietaryRestrictions.paleo : false }
          defaultChecked = {this.props.user ? this.props.user.userInfo.dietaryRestrictions.paleo : false}
          onCheck={(e) => this.handleChange(e, 'dietaryRestrictions')}
          id="paleo"
          label="Paleo" />
        <Checkbox
          value={this.props.user ? this.props.user.userInfo.dietaryRestrictions.vegan : false }
          defaultChecked = {this.props.user ? this.props.user.userInfo.dietaryRestrictions.vegan : false}
          onCheck={(e) => this.handleChange(e, 'dietaryRestrictions')}
          id="vegan"
          label="Vegan" />
        <Checkbox
          value={this.props.user ? this.props.user.userInfo.dietaryRestrictions.vegetarian : false }
          defaultChecked = {this.props.user ? this.props.user.userInfo.dietaryRestrictions.vegetarian : false}
          onCheck={(e) => this.handleChange(e, 'dietaryRestrictions')}
          id="vegetarian"
          label="Vegetarian" />
        <Checkbox
          value={this.props.user ? this.props.user.userInfo.dietaryRestrictions.kosher : false }
          defaultChecked = {this.props.user ? this.props.user.userInfo.dietaryRestrictions.kosher : false}
          onCheck={(e) => this.handleChange(e, 'dietaryRestrictions')}
          id="kosher"
          label="Kosher" />
        <Checkbox
          
          value = {this.props.user ? this.props.user.userInfo.dietaryRestrictions.halal : false}
          defaultChecked = {this.props.user ? this.props.user.userInfo.dietaryRestrictions.halal : false}
          onCheck={(e) => this.handleChange(e, 'dietaryRestrictions')}
          id="halal"
          label="Halal" />
        <br/>
        Allergies:
        <br/><br/>
        <Checkbox
          value = {this.props.user ? this.props.user.userInfo.allergies.milk : false }
          defaultChecked = {this.props.user ? this.props.user.userInfo.allergies.milk : false }
          onCheck={(e) => this.handleChange(e, 'allergies')}
          id="milk"
          label="Milk" />
        <Checkbox
          value={this.props.user ? this.props.user.userInfo.allergies.eggs : false }
          defaultChecked = {this.props.user ? this.props.user.userInfo.allergies.eggs : false }
          onCheck={(e) => this.handleChange(e, 'allergies')}
          id="eggs"
          label="Eggs" />
        <Checkbox
          value={this.props.user ? this.props.user.userInfo.allergies.fish : false }
          defaultChecked = {this.props.user ? this.props.user.userInfo.allergies.fish : false }
          onCheck={(e) => this.handleChange(e, 'allergies')}
          id="fish"
          label="Fish" />
        <Checkbox
          value={this.props.user ? this.props.user.userInfo.allergies.shellfish : false }
          defaultChecked = {this.props.user ? this.props.user.userInfo.allergies.shellfish : false }
          onCheck={(e) => this.handleChange(e, 'allergies')}
          id="shellfish"
          label="Shellfish" />
        <Checkbox
          value={this.props.user ? this.props.user.userInfo.allergies.tree_nuts : false }
          defaultChecked = {this.props.user ? this.props.user.userInfo.allergies.tree_nuts : false }
          onCheck={(e) => this.handleChange(e, 'allergies')}
          id="tree_nuts"
          label="Tree Nuts" />
        <Checkbox
          value={this.props.user ? this.props.user.userInfo.allergies.peanuts : false }
          defaultChecked = {this.props.user ? this.props.user.userInfo.allergies.peanuts : false }
          onCheck={(e) => this.handleChange(e, 'allergies')}
          id="peanuts"
          label="Peanuts" />
        <Checkbox
          value={this.props.user ? this.props.user.userInfo.allergies.wheat : false }
          defaultChecked = {this.props.user ? this.props.user.userInfo.allergies.wheat : false }
          onCheck={(e) => this.handleChange(e, 'allergies')}
          id="wheat"
          label="Wheat" />
        <Checkbox
          value={this.props.user ? this.props.user.userInfo.allergies.soybeans : false }
          defaultChecked = {this.props.user ? this.props.user.userInfo.allergies.soybeans : false }
          onCheck={(e) => this.handleChange(e, 'allergies')}
          id="soybeans"
          label="Soybeans" />
        <Checkbox
          value={this.props.user ? this.props.user.userInfo.allergies.gluten : false }
          defaultChecked = {this.props.user ? this.props.user.userInfo.allergies.gluten : false }
          onCheck={(e) => this.handleChange(e, 'allergies')}
          id="gluten"
          label="Gluten" />
        <RaisedButton label="Update" type='submit'/>
      </form>
    </div>
  )
  } 
}

function mapStateToProps( state ) {
  return {
    user: state.user
  };
}

// map action to container, pass through middleware and then reducers
function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ updateUserProfile }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
