import React from 'react'
import {Store} from './store/store'
import {Provider} from 'react-redux'
import App from './App'

 const Root=props=>{
    return (
        <Provider store={Store}>
        <App />

        </Provider>

    )
}
export default Root