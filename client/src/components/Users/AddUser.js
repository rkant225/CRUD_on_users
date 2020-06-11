import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/actions/index';
import UserAddEditForm from './UserAddEditForm';

class AddUser extends React.Component {
    onSubmit = (formData) => {
        this.props.addUser(formData);
    }

    render(){
        return(
            <UserAddEditForm onSubmit={this.onSubmit}/>
        );  
    }
    
}
export default connect(null,{addUser : Actions.addUser})(AddUser);