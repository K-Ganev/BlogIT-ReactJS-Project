import React, { useContext, Fragment } from 'react'
import { Link } from 'react-router-dom';
import './styles.css'
import AuthContext from '../../contexts/auth';

function Navigation() {
    const [user] = useContext(AuthContext);

    return (
        <ul>
            {user.loggedIn ?
                <Fragment>
                    <li>
                        <Link to="/latest"><strong>BlogIT</strong></Link>
                    </li>
                    <li>
                        <Link to="/createPost">
                            <i className="fas fa-marker"></i> Create Post
                         </Link>
                    </li>
                    <li>
                        <Link to="/latest">
                            <i className="fas fa-clock"></i> Latest Posts
                        </Link>
                    </li>
                    <li>
                        <Link to="/myPosts">
                            <i className="fab fa-medium-m"></i> My Posts
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <i className="fas fa-user-circle"></i> Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout">
                            <i className="fas fa-sign-out-alt"></i> Logout
                        </Link>
                    </li>
                </Fragment>
                :
                <Fragment>
                    <li>
                    <Link to="/"><strong>BlogIT</strong></Link>
                     </li>
                    <li>
                        <Link to="/login">
                            <i className="fas fa-door-open"></i> Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/register">
                            <i className="fas fa-user-plus"></i> Register
                        </Link>
                    </li>
                </Fragment>}
            <li>
                <Link to="/about">
                    <i className="fas fa-info-circle"></i> About
                </Link>
            </li>
        </ul>


        // <Navbar bg="primary" variant="dark" sticky="top">
        //     <Navbar.Brand href="/">BlogIT</Navbar.Brand>
        //     <Nav className="mr-auto">
        //         {user.loggedIn ?
        //             <Fragment>
        //                 <Nav.Link style={{ color: 'white' }} href="/logout">
        //                     <i className="fas fa-sign-out-alt"></i> Logout
        //                 </Nav.Link>
        //                 <Link style={{ color: 'white' }} to="/profile">
        //                     <i className="fas fa-user-circle"></i> Profile
        //                 </Link>
        //                 <DropdownButton id="dropdown-basic-button" variant="primary" title="Posts">
        //                     <Dropdown.Item href="/myPosts">My Posts</Dropdown.Item>
        //                     <Dropdown.Item href="/createPost">Create Post</Dropdown.Item>
        //                     <Dropdown.Item href="/latest">Latest Posts</Dropdown.Item>
        //                 </DropdownButton>
        //             </Fragment> :
        //             <Fragment>
        //                 <Nav.Link style={{ color: 'white' }} href="/login">
        //                     <i className="fas fa-door-open"></i> Login
        //                 </Nav.Link>
        //                 <Nav.Link style={{ color: 'white' }} href="/register">
        //                     <i className="fas fa-user-plus"></i> Register
        //                 </Nav.Link>
        //             </Fragment>}
        //         <Nav.Link style={{ color: 'white' }} href="/about">
        //             <i className="fas fa-info-circle"></i> About
        //         </Nav.Link>
        //     </Nav>
        //     <Form inline style={{ textAlign: "right" }}>
        //             <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
        //             <Button variant="outline-light">Search</Button>
        //     </Form>
        // </Navbar>
    );
}

export default Navigation;