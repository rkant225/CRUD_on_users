const initialState = {users : [], singleUser : {}}

const usersReducer = (state=initialState, action)=>{
    switch(action.type){
        case "FETCH_USERS":
            return{
                ...state,
                users : [...action.payload]
            }
        case 'ADD_USER':
            console.log('ADD',action.payload)
            return{
                ...state,
                users : [...state.users, action.payload]
            }
        case 'FETCH_SINGLE_USER':
            console.log('FETCH_SINGLE_USER',action.payload)
            return{
                ...state,
                singleUser : action.payload
            }
        case "DELETE_USER":            
            return{
                ...state,
                users : [...getRemainingUsersList(state.users, action.payload)]
            }
        case 'EDIT_USER':
            return{
                ...state,
                users : [...getUpdatedUserList(state.users, action.payload)]
            }
        default :
            return state;     
    }
}

const getUpdatedUserList=(oldList, newUserData)=>{
    const newList = [...oldList];
    const index = oldList.findIndex(user => user.id === newUserData.id);
    newList[index] = newUserData;

    return newList
}

const getRemainingUsersList = (oldList, id) =>{
    const newList = oldList.filter(user=> user.id !== id);
    return newList;
}

export default usersReducer;