import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {signIn, addEmailToUser, addPasswordToUser} from '../actions/index.js'


class SignIn extends Component {
    signIn(){
        const {email, password} = this.props.state
        this.props.signIn(email, password);
    }

    componentWillMount() {
        console.log(this.props)
      console.log('Component WILL MOUNT!')
    //   this.props.setState({message: 'as'})
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
                        <h2>Sign In</h2>

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
                            <button className="btn btn-primary" onClick = {() => this.signIn()} >Sign in</button>
                        <div>
                            {this.props.state.error ? (
                               <span> {this.props.state.message}</span>
                             ) :null}
                        </div>
                        <div><Link to={'/signup'}>Not a user? Sign up instead</Link></div>
                    <div><Link to={'/forgot-password'}>Forgot Password?</Link></div>
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
export default connect(mapStateToProps, {signIn, addEmailToUser, addPasswordToUser})(SignIn)
