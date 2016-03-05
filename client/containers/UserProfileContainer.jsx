import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUserProfile, setUserImage } from '../actions/index.jsx';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import Checkbox from 'material-ui/lib/checkbox';
import Divider from 'material-ui/lib/divider';
import Dropzone from 'react-dropzone';
import blobUtil from 'blob-util';

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

  onDrop(files) {
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', files[0].preview, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
      if (this.status == 200) {
        var blob = this.response;
        if (!blob) { 
          return;
        }
        // myBlob is now the blob that the object URL pointed to.
        blobUtil.blobToBase64String(blob)
        .then(function (base64String) {
          // success 
          console.log("blob to base 64 string looks like this: ", base64String);
          var profile_pic = {
            username: self.props.user.userInfo.username,
            profile_pic: {
              data: ("data:image/jpeg;base64, " + base64String),
              contentType: 'image/jpeg',
            }
          }
          // dispatch action to upload image to server
          self.props.setUserImage(self.props.user.userInfo.username, profile_pic);
        }).catch(function (err) {
          console.log("error converting blob to array buffer", err);
        });
      }
    };
    xhr.send();
  }

  render(){
  return (
    <div className="col-md-12 form-background">
        <form className="col-md-12 form-details-background"onSubmit={this.handleSubmit}>
          <div className="row">
            
            <div className="col-md-2 user-image-column">
              <div className="drop-zone-styles">
                
              {this.props.user.userInfo.profile_pic ? <div>
              <div><img id="profilepic" className="user-profile-pic" src={this.props.user.userInfo.profile_pic.data} /></div>
              </div> : null}

                <Dropzone onDrop={this.onDrop.bind(this)}>
                  <div className="drop-zone-text">
                    We know you're awesome. Let it show. Drop your picture here. 
                  </div>
                </Dropzone>
              </div>
            </div>

            <div className="col-md-10 basic-info">
              <div className="panel panel-success">
                <div className="panel-heading">Basic Info</div>
                <div className="panel-body">
        
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
                </div>
              </div>
            </div>

            <div className="col-md-3 allergies">
              <div className="panel panel-success">
                <div className="panel-heading">Allergies</div>
                <div className="panel-body">
        
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
                
                </div>
              </div>
              <div className="update-button-container">
                <RaisedButton label="Update" type='submit'/>
              </div>
            </div>
              
            <div className="col-md-3 dietary-restrictions">
              <div className="panel panel-success">
                <div className="panel-heading">Dietary Restrictions</div>
                <div className="panel-body">
                  <span>
                    <Checkbox
                      value={this.props.user ? this.props.user.userInfo.dietaryRestrictions.paleo : false }
                      defaultChecked = {this.props.user ? this.props.user.userInfo.dietaryRestrictions.paleo : false}
                      onCheck={(e) => this.handleChange(e, 'dietaryRestrictions')}
                      id="paleo"
                      label="Paleo" />
                  </span>
                  <span>
                    <Checkbox
                      value={this.props.user ? this.props.user.userInfo.dietaryRestrictions.vegan : false }
                      defaultChecked = {this.props.user ? this.props.user.userInfo.dietaryRestrictions.vegan : false}
                      onCheck={(e) => this.handleChange(e, 'dietaryRestrictions')}
                      id="vegan"
                      label="Vegan" />
                  </span>
                  <span>
                    <Checkbox
                      value={this.props.user ? this.props.user.userInfo.dietaryRestrictions.vegetarian : false }
                      defaultChecked = {this.props.user ? this.props.user.userInfo.dietaryRestrictions.vegetarian : false}
                      onCheck={(e) => this.handleChange(e, 'dietaryRestrictions')}
                      id="vegetarian"
                      label="Vegetarian" />
                  </span>
                  <span>
                    <Checkbox
                      value={this.props.user ? this.props.user.userInfo.dietaryRestrictions.kosher : false }
                      defaultChecked = {this.props.user ? this.props.user.userInfo.dietaryRestrictions.kosher : false}
                      onCheck={(e) => this.handleChange(e, 'dietaryRestrictions')}
                      id="kosher"
                      label="Kosher" />
                  </span>
                  <span>
                    <Checkbox
                      value = {this.props.user ? this.props.user.userInfo.dietaryRestrictions.halal : false}
                      defaultChecked = {this.props.user ? this.props.user.userInfo.dietaryRestrictions.halal : false}
                      onCheck={(e) => this.handleChange(e, 'dietaryRestrictions')}
                      id="halal"
                      label="Halal" />
                  </span>
                </div>
              </div>
            </div>

        </div>
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
  return bindActionCreators({ updateUserProfile, setUserImage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
