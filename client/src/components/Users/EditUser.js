import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/actions/index';
import UserAddEditForm from './UserAddEditForm';

class EditUser extends React.Component {
    
    componentDidMount(){
        const userId = this.props.match.params.userId;
        this.props.fetchSingleUser(userId);
    }

    onSubmit = (formData) => {
        const userId = this.props.match.params.userId;
        this.props.editUser(userId, formData);
    }

    render(){
         
        const initialValue = this.props.singleUser || {name : "Ram"}
        return(
            <div>
                {this.props.singleUser && this.props.singleUser.name && 
                <UserAddEditForm initialValues={this.props.singleUser} onSubmit={this.onSubmit}/>
            }
            </div>
            
        );  
    }
    
}

const mapStateToProps =(state)=>{
    return{
        singleUser : state.usersReducer.singleUser
    }
}

export default connect(mapStateToProps,{fetchSingleUser : Actions.fetchSingleUser, editUser : Actions.editUser})(EditUser);