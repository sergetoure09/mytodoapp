import * as actionTypes from './actionTypes'
import * as firebase from 'firebase'

const authStart=()=>{
    return dispatch=>{
        dispatch({
            type:actionTypes.AUTH_START
        })
    }
}

const authSuccess=(uid,token)=>{
    return dispatch=>{
        dispatch({
            action:actionTypes.AUTH_SUCCESS,
            payload:{uid,token}
        })
        

    }
}

export const authenticateUser=(email,password)=>{
    return dispatch=>{

        dispatch(authStart())

        let uid
        let token

        firebase.auth().signInWithEmailAndPassword(email,password).then(user=>{
                                                                uid=user.uid
                                                                user.getIdToken().then(usertoken=>{

                                                                        token=usertoken

                                                                        dispatch(authSuccess(uid,token))
                                                                        })
                                                                    }


                                                        
                                                                ).catch(error=>{
                                                                console.log("user not found...")
                                                                console.log("Creating the new user...")
                                                                switch(error.code){
                                                                    case "auth/user-not-found":
                                                                    firebase.auth().createUserWithEmailAndPassword(email,password)
                                                                    .then(user=>{
                                                                        uid=user.uid
                                                                        user.getIdToken().then(usertoken=>{
        
                                                                            token=usertoken
    
                                                                            dispatch(authSuccess(uid,token))
    
                                                                    })
                                                                    
                                                                    });
                                                                    break

                                                                    default:
                                                                    return null
                                                                        //alert('Please verify password')
                                                                       

                                                                        
                                                                }
                                                            })
                                                            
                                                                


    }
}
