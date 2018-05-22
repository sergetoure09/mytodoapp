import * as actionTypes from '../action/actionTypes'

const initialState={
    token:null,
    uid:null,
    loading:false
}

export const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading:true
            }

        case actionTypes.AUTH_SUCCESS:
        return {
            ...state,
            uid:action.payload.uid,
            token:action.payload.token,
            loading:false
        }

        case actionTypes.AUTH_LOGOUT:
        return {
            ...state,
            token:null,
            uid:null,
            loading:false
        }

        default:
        return state
    }
}