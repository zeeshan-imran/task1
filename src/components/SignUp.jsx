import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {signUp, addEmailToUser, addPasswordToUser} from '../actions/index.js'

class SignUp extends Component {
    signUp(){
      const {email, password, displayName} = this.props.state
      this.props.signUp(email, password, displayName);
    }

    componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {
      console.log('Component WILL RECIEVE PROPS!', newProps, 'props', this.props.state)
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!', nextProps, nextState);
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!', prevProps,prevState )
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
    render() {
        return (
            <div className="container">
                <div className="content">
                    <div className="form">
                        <h2>Sign Up</h2>

                        {/* <div className="form-group">
                            <input className="form-control"
                                type="text"
                                placeholder="Full Name"
                                onChange ={event => this.props.addDisplayNameToUser(event.target.value)}></input>
                        </div> */}

                        <div className="form-group">
                            <input className="form-control"
                                type="email"
                                placeholder="Email"
                                onChange ={event => this.props.addEmailToUser(event.target.value)}></input>
                        </div>

                        <div className="form-group">
                            <input className="form-control"
                                type="password"
                                placeholder="Password"
                                onChange = {event => this.props.addPasswordToUser(event.target.value)}></input>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary" onClick = {() => this.signUp()} >Sign up</button>
                         <div>
                              <span>{this.props.state.message}</span>
                         </div>
                            <div><Link to={'/signin'}>Already a user? Sign in instead</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log('state', state)
    return {
        state
    }
}
export default connect(mapStateToProps, {signUp, addEmailToUser, addPasswordToUser})(SignUp)
