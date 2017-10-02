import React,{Component} from 'react';
import {connect} from 'react-redux'
import {listReddit} from '../actions/index.js'
import Datatable from 'react-bs-datatable'; // Import this package

const header = [
  { title: 'Name', prop: 'display_name', sortable: true, filterable: true },
  { title: 'Audience', prop: 'audience_target', sortable: true, filterable: true },
  { title: 'Description', prop: 'public_description', sortable: true, filterable: true },
];

class ListRedditCategories extends Component {

    listReddit(){
        this.props.listReddit();
    }


    componentWillMount() {
        console.log(this.props)
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
              <div className="form">
                    <h2></h2>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick = {() => this.listReddit()} >Fetch Reddit Categories</button>
                        <div className="table-responsive">
                            {this.props.state.redditList ? (
                                <Datatable
                                    tableHeader={header}
                                    tableBody={this.props.state.redditList}
                                    keyName="userTable"
                                    tableClass="striped hover responsive"
                                    rowsPerPage={10}
                                    rowsPerPageOption={[5, 10, 15, 20]}
                                    initialSort={{prop: "display_name", isAscending: true}}
                                  />
                             ) :null}
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
export default connect(mapStateToProps, {listReddit})(ListRedditCategories)
