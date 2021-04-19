import React, {Component} from "react";
// import Header from "./Header";  // Gresna pateka
// import Header from "./container/Header/Header" // Tocna pateka
// import MovieList from "./MovieList"; // Grena pateka

import {BrowserRouter, Route} from "react-router-dom";
import MovieList from "./Components/Movie/MovieList"
import MovieDetails from "./Components/Movie/MovieDetails"
import "./Styles/App.scss"
import Home from "./Container/Home/Home"
import Navbar from "./Container/Navbar/Navbar"
import Posts from "./Container/Posts/Posts"
import {Provider} from "react-redux"
import store from "./store"
import Post from "./Components/Post/Post"
import UpdatePost from "./Components/Post/UpdatePost"
import AddPost from "./Components/Post/AddPost"

// import Home from "./Home"; // Grena pateka
// import MovieDetails from "./MovieDetails"; // Grena pateka

class App extends Component {
    state = {message: "Hello, React!!!"}; // Ne se koristi nigde
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Navbar/>
                        <div className='container'>
                            <Route path='/' exact={true} component={Home}/>
                            <Route path='/movies' component={MovieList}/>
                            <Route path='/details' component={MovieDetails}/>
                            <Route exact path="/addPost" component={AddPost} />
                            <Route path='/posts' component={Posts}/>
                            <Route exact path="/post/:id" component={Post} />
                            <Route exact path="/updatePost/:id" component={UpdatePost} />
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
