import React,{Component} from 'react';
import {Link} from 'react-router';
import ListRedditCategories from './ListRedditCategories.jsx'
import SignOut from './SignOut.jsx'
import ListUsers from './ListUsers.jsx'
import RedditTop20List from './RedditTop20.jsx'
import '../App.css'



class App extends Component {
    signOut(){
        // this.props.signOut();
    }
    render() {
        return (
            <div className="container">
                <div className="content">
                    <RedditTop20List/>
                    <ListRedditCategories />
                    <ListUsers/>
                    <Link className="btn btn-primary table-responsive" to={"/update-profile"}>Update Profile</Link>
                    <SignOut/>

                    {/* <button className="btn btn-danger"
                        onClick={() => this.signOut()}>Sign Out</button> */}
                </div>
            </div>
        );
    }
}

export default App;
