const initialState={
    user:[]
}

const userReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'set_user':
            return{
                ...state,
                user:action.payload.user
            }
        case 'add_user':
            return{
                ...state,
                user: [...state.user, action.payload]
            }
          
            
        default:
            return state;
    }
}

export default userReducer