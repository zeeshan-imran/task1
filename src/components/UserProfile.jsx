import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {firebaseApp} from '../firebase.js'
import {updateProfile, addDisplayNameToUser} from '../actions/index.js'


class UserProfile extends Component {
    updateProfile(){
        const {displayName} = this.props.state
        this.props.updateProfile(displayName);
    }

    componentWillMount() {
        var user = firebaseApp.auth().currentUser;
        this.props.state.displayName = user.displayName
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
                        <h2>Update Profile</h2>
                        <div className="form-group">
                            <label>Your Current Display Name: {this.props.state.displayName}</label>
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                type="text"
                                placeholder="Name"
                                onChange ={event => this.props.addDisplayNameToUser(event.target.value)}></input>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary" onClick = {() => this.updateProfile()} >Update</button>
                            <div>
                                   <span> {this.props.state.message} </span>
                            </div>
                            <div><Link to={'/app'}>Back to Main Page</Link></div>
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
export default connect(mapStateToProps, {updateProfile, addDisplayNameToUser})(UserProfile)
