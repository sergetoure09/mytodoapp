import React, { Component } from 'react';
// import Card from 'grommet/components/Card';

// import Section from 'grommet/components/Section'

//import Toast from 'grommet/components/Toast';
import LoginForm from 'grommet/components/LoginForm';
import Anchor from 'grommet/components/Anchor'
//import Section from 'grommet/components/Section'

import * as Icon from 'react-icons/lib/io'

import {Avatar} from './component/Avatar'
import {Logo} from './component/Logo'
import {AppFooter}  from './component/AppFooter'
import {connect} from 'react-redux'
import * as actionCreators from '../src/action/actionCreators'
import Spinning from 'grommet/components/icons/Spinning';





class App extends Component {



  handleAuthentication=(email,password)=>{
    console.log(`email is ${email} and password is ${password}`)

    this.props.authenticateUser(email,password)
    
  }



  render() {

    let authComponentDisplay= this.props.auth ? ( <div className="auth-nav">
    <div className="auth-nav__logout"><span>logout</span></div>
    <Avatar username="Serge Toure" picture="./img/serguey.jpg" />
    </div>):(<div className="auth-nav">
                          <div className="auth-nav__login"><span>login</span></div>
                          <div className="auth-nav__register"><span>register</span></div>
                          
                          </div>)
    let navDisplay= this.props.auth ? ( <nav className="main-nav">
    <a href="#" className="main-nav__item">TODO manager</a>
    <a href="#" className="main-nav__item"><Icon.IoArrowGraphUpLeft />TODO report</a>
    </nav>): null 

    let mainContent= this.props.loading ? <Spinning size="xlarge" /> : (<div className="loginform">
    <LoginForm onSubmit={({username,password})=>{alert(username+' '+password) 
                                              this.handleAuthentication(username,password)}}
            title='Login'
            // forgotPassword={<Anchor href='#'
            // label='Forgot password?' />}
            />
   
    </div>  )

    return (
      
      
      <div className="App">

              <div className="header">

                          <Logo />
                         {navDisplay}
                         {authComponentDisplay}
                          
              </div>

            
              <section className="main">
                      {mainContent}
              </section>


              
             <AppFooter />
                         

      </div>

            
      
    );
  }
}


const mapStateToProps=state=>{
  return {
    auth:state.auth.token ? true : false,
    loading:state.auth.loading
  }
}

const mapdispatchToProps=dispatch=>{
  return{
    authenticateUser:(email,password)=>dispatch(actionCreators.authenticateUser(email,password))
  }
}

export default connect(mapStateToProps,mapdispatchToProps)(App);
