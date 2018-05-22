import * as actionTypes from './actionTypes'
import * as firebase from 'firebase'
//import {Store} from '../store/store'

const authStart=()=>{
    return {
            type:actionTypes.AUTH_START
       
    }
}

const authSuccess=(uid,token)=>{
    localStorage.setItem('uid',uid)
    localStorage.setItem('token',token)
return {
            type:actionTypes.AUTH_SUCCESS,
            payload:{uid,token}
    }
}


const authLogout=()=>{
    localStorage.removeItem('uid')
    localStorage.removeItem('token')
    return {
        type:actionTypes.AUTH_LOGOUT
    }

}
export const logoutUser=()=>{
    return dispatch=>{
        dispatch(authStart())
        //dispatch(authLogout())
        firebase.auth().signOut()
        

    }
  
}

export const initApp=()=>{
    
    let uid=localStorage.getItem('uid')
    let token=localStorage.getItem('token')
    return dispatch=>{
        dispatch(authStart())
        //active listener
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                                                    console.log(user)
                                                    let uid=user.uid
                                                    user.getIdToken().then(token=>{
                                                        dispatch(authSuccess(uid,token))
                                                    })
                                                    }else{
                                                    dispatch(authLogout())
        
        
                                                    }
        
                                                    })
        dispatch(authSuccess(uid,token))
    }
}


export const authenticateUser=(email,password)=>{
    return dispatch=>{
        dispatch(authStart())
            
       let authPromise=firebase.auth().signInWithEmailAndPassword(email,password)
            authPromise.catch(error=>{
                switch(error.code){
                    case "auth/user-not-found":
                    alert("user not found!! the user will be created")
                    firebase.auth().createUserWithEmailAndPassword(email,password).catch(error=>{
                        alert(error.message)
                    })
                    break;

                    default:
                    return null
                }
            })


            //active listener
            firebase.auth().onAuthStateChanged(user=>{
                if(user){
                                                        console.log(user)
                                                        let uid=user.uid
                                                        user.getIdToken().then(token=>{
                                                            dispatch(authSuccess(uid,token))
                                                        })
                                                        }else{
                                                        dispatch(authLogout())
            
            
                                                        }
            
                                                        })

        }
    }


    

