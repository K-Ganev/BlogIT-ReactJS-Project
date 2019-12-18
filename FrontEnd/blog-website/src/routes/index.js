import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/NavBar'
import GuestLandingPage from '../components/LandingPage/GuestPage';
import LatestPosts from '../components/Posts/LatestPosts';
import MyPosts from '../components/Posts/MyPosts';
import CreatePost from '../components/Posts/CreatePost';
import AboutPage from '../components/About';
import FullPost from '../components/Posts/FullPost';
import PageNotFound from '../components/PageNotFound';
import Register from '../components/Register';
import Login from '../components/Login';
import Logout from '../components/Logout'
import Profile from '../components/ProfilePage';
import editProfile from '../components/ProfilePage/editProfile/';
import { AuthContextProvider } from '../contexts/auth';
import { ToastContainer } from 'react-toastify';

const Navigation = () => {
    return (
        <Router>
            <AuthContextProvider>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={GuestLandingPage} />
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/logout" exact component={Logout} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/editProfile" exact component={editProfile} />
                    <Route path="/latest" exact component={LatestPosts} />
                    <Route path="/myPosts" exact component={MyPosts} />
                    <Route path="/post/:id" component={FullPost} />
                    <Route path="/createPost" exact component={CreatePost} />
                    <Route component={PageNotFound} />
                </Switch>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
            </AuthContextProvider>
        </Router>
    );
}

export default Navigation;