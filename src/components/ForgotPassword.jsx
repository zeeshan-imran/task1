import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {forgotPassword, addEmailToUser} from '../actions/index.js'


class ResetPassword extends Component {
    reset(){
        const {email} = this.props.state
        this.props.forgotPassword(email);
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
                        <h2>Forget Password?</h2>

                        <div className="form-group">
                            <input className="form-control"
                                type="email"
                                placeholder="Email"
                                onChange ={event => this.props.addEmailToUser(event.target.value)}></input>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary" onClick = {() => this.reset()} >Reset</button>
                            <div>
                                   <span> {this.props.state.message}</span>
                            </div>
                            <div><Link to={'/signin'}>Back to Login</Link></div>
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
export default connect(mapStateToProps, {forgotPassword, addEmailToUser})(ResetPassword)
