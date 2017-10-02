import React,{Component} from 'react';
import {connect} from 'react-redux'
import {getUserList} from '../actions/index.js'
import Datatable from 'react-bs-datatable'; // Import this package

const header = [
  { title: 'Id', prop: 'id', sortable: true, filterable: true },
  { title: 'email', prop: 'email', sortable: true, filterable: true },
  { title: 'displayName', prop: 'displayName', sortable: true, filterable: true },
];

class ListUsers extends Component {
        getUserList(){
        this.props.getUserList();
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
            <div className="form">
                <button className="btn btn-primary" onClick = {() => this.getUserList()} >List All Users</button>
                <div className="table-responsive">
                    {this.props.state.users ? (
                    <Datatable
                    tableHeader={header}
                    tableBody={this.props.state.users}
                    keyName="userTable"
                    tableClass="striped hover responsive"
                    rowsPerPage={10}
                    rowsPerPageOption={[5, 10, 15, 20]}
                    initialSort={{prop: "display_name", isAscending: true}}
                    />
                    ) :null}
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

export default connect(mapStateToProps, {getUserList})(ListUsers)
