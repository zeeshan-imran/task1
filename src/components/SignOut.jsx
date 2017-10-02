import React,{Component} from 'react';
import {connect} from 'react-redux'
import {signOut} from '../actions/index.js'

class SignOut extends Component {
    signOut(){
        this.props.signOut();
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
            <div className="table-responsive">
                <button className="btn btn-danger" onClick = {() => this.signOut()} >Sign out</button>
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

export default connect(mapStateToProps, {signOut})(SignOut)
