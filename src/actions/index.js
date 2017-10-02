import {UPDATE_PROFILE, RESET_PASSWORD, SIGN_OUT, SIGN_UP, SIGN_IN, ADD_EMAIL, ADD_PASSWORD, ADD_DISPLAY_NAME, LIST_FROM_REDDIT, USER_LIST, TOP_20_LIST} from '../constants.js'
import axios from 'axios'

import {firebaseApp, userRef} from '../firebase.js'

import _ from 'lodash'


export function signUp(email, password, displayName){
  return (dispatch) => {
    new Promise(function(resolve, reject) {

      let newUser = {
        message: '',
        emailVerified: '',
        email,
        password,
        displayName
      }
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        if(user && user.emailVerified === false){
          user.sendEmailVerification().then(function(){
            console.log("email verification sent to user");
          });
          let {email, uid} = user
          // userRef.push(email, uid)
          firebaseApp.database().ref('users/' + user.uid).set({
              displayName: user.displayName,
              email: user.email,
              id: user.uid
            });
          newUser.error = true
          newUser.emailVerified = user.emailVerified
          newUser.message = 'email verification sent to user'
          dispatch ({
            type : SIGN_UP ,
            user: newUser
          })
          resolve(newUser)
        }
      })
      .catch((error) => {
        newUser.error = true
        newUser.message = error.message
        dispatch ({
          type : SIGN_UP ,
          user: newUser
        })
        resolve(newUser);
      })
      dispatch ({
        type : SIGN_UP ,
        user: newUser
      })
    })
  }

}

export function addEmailToUser(email){
  return {
    type: ADD_EMAIL,
    email
  }
}

export function addPasswordToUser(password){
  return {
    type: ADD_PASSWORD,
    password
  }
}

export function addDisplayNameToUser(displayName){
  return {
    type: ADD_DISPLAY_NAME,
    displayName
  }
}

export function signIn(email, password){
  let user = {
    email,
    password
  }
  return (dispatch) => {
    new Promise(function(resolve, reject) {
          firebaseApp.auth().signInWithEmailAndPassword(email, password)
          .then((user) => {
              if(user && user.emailVerified === false){
                console.log("email verification sent to user");
                dispatch ({
                  type : SIGN_IN ,
                  user: user
                })

                user.error = true
                resolve(user);
                // this.setState({error: {message: 'An Email verification has been sent, please accept that first'}})
              }

              user.error = false
              dispatch ({
                type : SIGN_IN ,
                user: user
              })
              resolve(user);
          })
          .catch((error) => {
              // this.setState({error: error})

              user.error = true
              user.message =  error.message
              dispatch ({
                type : SIGN_IN ,
                user: user
              })
              resolve(error);
          })
    })
  }
}

export function listReddit(){
  return (dispatch) => {
    new Promise(function(resolve, reject) {
      axios.get('https://www.reddit.com/subreddits.json')
        .then(function (response) {
          var sortedData = _.map(response.data.data.children).map(function(child) {return child.data});
          dispatch ({
            type : LIST_FROM_REDDIT ,
            data: sortedData
          })
          resolve(sortedData);
        })
        .catch(function (error) {
          dispatch ({
            type : LIST_FROM_REDDIT ,
            data: error
          })
          resolve(error);
        });
    })
  }
}

export function forgotPassword(email){
  return (dispatch) => {
    firebaseApp.auth().sendPasswordResetEmail(email)
    .then(() => {
      dispatch ({
        type : RESET_PASSWORD ,
        message: 'An Email has been sent to your email.'
      })
    })
    .catch((error) => {
      dispatch ({
        type : RESET_PASSWORD ,
        message: error.message
      })
    })
  }
}

export function signOut(){
  return (dispatch) => {
    firebaseApp.auth().signOut()
    .then(() => {
      dispatch ({
        type : SIGN_OUT ,
        message: 'Session destroyed.'
      })
    })
    .catch((error) => {
      dispatch ({
        type : SIGN_OUT ,
        message: error.message
      })
    })
  }
}

export function updateProfile(displayName) {
    var user = firebaseApp.auth().currentUser;
    return (dispatch) => {
      user.updateProfile({displayName: displayName})
      .then(() => {
        firebaseApp.database().ref('users/' + user.uid).set({
          displayName: displayName,
          email: user.email,
          id: user.uid
        });
        dispatch ({
          type : UPDATE_PROFILE ,
          message: 'User Updated Sucessfully '
        })
      })
      .catch((error) => {
        dispatch ({
          type : UPDATE_PROFILE ,
          message: error.message
        })
      })
    }

}

export function getUserList(){
  return (dispatch) => {
    firebaseApp.database().ref('users').on('value', snap => {
        let users = []
        snap.forEach(user => {
            const {email, displayName, id} = user.val();
            users.push({email, displayName, id});
        })
        dispatch ({
          type : USER_LIST ,
          users: users
        })
    })
  }
}

export function listTop20(){
  return (dispatch) => {
    new Promise(function(resolve, reject) {
      axios.get('https://www.reddit.com/r/TellMeAFact/top/.json?count=20')
        .then(function (response) {
          var sortedData = _.map(response.data.data.children).map(function(child) {return child.data});
          dispatch ({
            type : TOP_20_LIST ,
            data: sortedData
          })
          resolve(sortedData);
        })
        .catch(function (error) {
          dispatch ({
            type : TOP_20_LIST ,
            data: error
          })
          resolve(error);
        });
    })
  }
}
