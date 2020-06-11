import axios from 'axios';
import history from '../../Router/history';

const BASE_URL = 'http://localhost:3001';

export const fetchUsers = ()=>{
    return async (dispatch)=>{
        const res = await axios.get(`${BASE_URL}/users`);
        dispatch({type : 'FETCH_USERS', payload : res.data})  
    }
}

export const addUser = (userData)=>{
    return async (dispatch)=>{
        const res = await axios.post(`${BASE_URL}/users`, userData);
        dispatch({type : 'ADD_USER', payload : res.data});
        history.push('/'); 
    }
}

export const fetchSingleUser = (id)=>{
    return async (dispatch)=>{
        const res = await axios.get(`${BASE_URL}/users/${id}`);
        dispatch({type : 'FETCH_SINGLE_USER', payload : res.data});
    }
}

export const editUser = (id,userData) =>{
    return async (dispatch) =>{
        let response = await axios.patch(`${BASE_URL}/users/${id}`, userData);
        dispatch({type : 'EDIT_USER' , payload : response.data });
        history.push('/');
    }
}

export const deleteUser = (id) =>{
    return async (dispatch) =>{
        let response = await axios.delete(`${BASE_URL}/users/${id}`);
        dispatch({type : 'DELETE_USER' , payload : id })
        history.push('/');
    }
}

