import {UPDATE_PROFILE, RESET_PASSWORD, SIGN_OUT, SIGN_UP, SIGN_IN, ADD_EMAIL, ADD_PASSWORD, ADD_DISPLAY_NAME, LIST_FROM_REDDIT, USER_LIST, TOP_20_LIST} from '../constants.js'

let user = {
    email: '',
    password: '',
    displayName: '',
    message: '',
    emailVerified: false,
    error: false
}
let redditList = []
let top20List = []
let users = []

export default (state = user, action) => {
  switch (action.type) {
    case ADD_EMAIL:
      state.email = action.email
      return state

    case ADD_PASSWORD:
      state.password = action.password
      return state

    case ADD_DISPLAY_NAME:
      state.displayName = action.displayName
      return state

    case SIGN_UP:
      state.email = action.user.email || ''
      state.displayName = action.user.displayName || ''
      state.emailVerified = action.user.emailVerified || ''
      state.message = action.user.message || ''
      state.error = action.user.error || ''
      return {...state, user}

    case SIGN_IN:
      state.email = action.user.email || ''
      state.displayName = action.user.displayName || ''
      state.emailVerified = action.user.emailVerified
      state.message = action.user.message || ''
      state.error = action.user.error || ''
      return {...state, user}

    case LIST_FROM_REDDIT:
      redditList = action.data
      return {...state, redditList}

    case RESET_PASSWORD:
      state.message = action.message
      return {...state, user}

    case SIGN_OUT:
      state = user
      return {...state, user}
    case UPDATE_PROFILE:
        state.message = action.message
        return {...state, user}
    case USER_LIST:
        state.users = action.users
        return {...state, user}
    case TOP_20_LIST:
        top20List = action.data
        return {...state, top20List}
    default:
      return state
  }
}
