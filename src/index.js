import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {firebaseApp} from './firebase.js'
import reducer from './reducers/index.js'
import ReduxThunk from 'redux-thunk'


// Components
import App from './components/App.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import ResetPassword from './components/ForgotPassword.jsx'
import UserProfile from './components/UserProfile.jsx'


// Usage
const store = createStore(reducer, applyMiddleware(ReduxThunk));
firebaseApp.auth().onAuthStateChanged(user => {
    if (user){
        console.log('User Lgged in', store)
        if(user.emailVerified == false){
        } else{
            browserHistory.push('/app')
        }
    }else{
        console.log('User Lgged out')
        browserHistory.replace('/signin')
    }
})

ReactDom.render(
    <Provider store={store}>
        <Router path="/" history= {browserHistory}>
            <Route path="/app" component={App}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/forgot-password" component={ResetPassword}></Route>
            <Route path="/update-profile" component={UserProfile}></Route>
        </Router>
    </Provider>
    , document.getElementById('root')
)
