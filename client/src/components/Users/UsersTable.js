import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/actions/index';
import history from '../../Router/history';
import UserRow from './UserRow';

const UsersTable = (props)=>{
    useEffect(()=>{
        props.fetchUsers();
    },[]);

    const {users} = props;

    return(
    <div>
        <div className="app-header">
            <h1>Simple CRUD Application</h1>
        </div>
        <table className="ui compact celled  table">
            <thead>
                <tr>
                    <th>SNo.</th>
                    <th>Name</th>
                    <th>E-mail address</th>
                    <th>Actions</th>
                </tr>
            </thead>
    
            <tbody>
                {
                    users.map((user, i)=>{
                        return <UserRow key={i} {...user} index={i+1}/>
                    })
                }
            </tbody>
    
            <tfoot className="full-width">
                <tr>
                    <th colSpan="4">
                        <div onClick={()=>{history.push('/adduser')}} className="ui right floated small primary labeled icon button">
                            <i className="user icon"></i> Add User
                        </div>
                    </th>
                </tr>
            </tfoot>
        </table>
    </div>

    );
}

const mapStateToProps=(state)=>{
    return{
        users : state.usersReducer.users
    }
}

export default connect(mapStateToProps,{fetchUsers : Actions.fetchUsers})(UsersTable);