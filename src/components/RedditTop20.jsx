import React,{Component} from 'react';
import {connect} from 'react-redux'
import {listTop20} from '../actions/index.js'
import Datatable from 'react-bs-datatable'; // Import this package

const header = [
  { title: 'Id', prop: 'id', sortable: true, filterable: true },
  { title: 'Title', prop: 'title', sortable: true, filterable: true },
  { title: 'Category', prop: 'subreddit', sortable: true, filterable: true },
  { title: 'Url', prop: 'url', sortable: true, filterable: true },
  { title: 'Author', prop: 'author', sortable: true, filterable: true },
];

class RedditTop20List extends Component {

    listTop20(){
        this.props.listTop20();
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
                        <button className="btn btn-primary" onClick = {() => this.listTop20()} >Fetch Reddit Top 20</button>
                        <div className="table-responsive">
                            {this.props.state.top20List ? (
                                <Datatable
                                    tableHeader={header}
                                    tableBody={this.props.state.top20List}
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
export default connect(mapStateToProps, {listTop20})(RedditTop20List)
