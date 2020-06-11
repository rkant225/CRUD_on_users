import React from 'react';
import {useState} from 'react';
import Modal from '../UI/Modal';
import history from '../../Router/history';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/actions/index';

const UserRow =(props)=>{
    const [displayDetailsModal, setdisplayDetailsModal] = useState(false);
    const [displayDeleteModal, setdisplayDeleteModal] = useState(false);

    const {id, name, age, email, mobile, address , country, pin, index} = props;

    const handleCancle =() =>{
        setdisplayDetailsModal(false);
    }

    const handleDeleteCancle =()=>{
        setdisplayDeleteModal(false);
    }

    const modelActions = () =>{
        return(
            <React.Fragment>
                <button onClick={handleCancle} className="ui button">Close</button>
            </React.Fragment>
        );
    }

    const deleteModelActions =()=>{
        return(
            <React.Fragment>
                <button onClick={handleDeleteCancle} className="ui button">Close</button>
                <button onClick={()=>{props.deleteUser(id); handleDeleteCancle();}} className="ui button danger">Delete</button>
            </React.Fragment>
        );
    }

    const getModalContent =()=>{
        return(
            <div className="user-point-details">
               <b>User Name</b> :  {name}
               <br/>
               <b>Age</b> : {age}
               <br/>
               <b>Email</b> : {email}
               <br/>
               <b>Mobile No.</b> : {mobile}
               <br/>
               <b>Address</b> : {address}
               <br/>
               <b>Country</b> : {country}
               <br/>
               <b>PIN</b> : {pin}
            </div>
        );
    }

    

    return(
        <React.Fragment>
            <tr>
                <td>{index}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <button onClick={()=>setdisplayDetailsModal(true)} className="ui green button">View</button>
                    <button onClick={()=>{history.push(`/edituser/${id}`)}} className="ui blue button">Edit</button>
                    <button onClick={()=>{setdisplayDeleteModal(true)}} className="ui red button">Delete</button>
                </td>
            </tr>

            {displayDetailsModal &&  <Modal 
                    title={"User Details"}
                    content={getModalContent()}
                    onCancle={handleCancle}
                    actions={modelActions()}
            />}

            {displayDeleteModal &&  <Modal 
                    title={"Delete user"}
                    content={"Do you realy want to delete this user?"}
                    onCancle={handleDeleteCancle}
                    actions={deleteModelActions()}
            />}
        </React.Fragment>
        
    );
}

export default connect(null, {deleteUser : Actions.deleteUser})(UserRow);