import React,{ useContext } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import AuthContext from '../../contexts/auth';

const ProfilePage = (props) => {   

    const [user] = useContext(AuthContext);
    const { name, job ,email, address, phone } = user;

    return (
        <div>
            <div className="card-container">

                <div className="upper-container">
                    <div className="image-container">
                        <img src='/userIcon.png' alt="profile" />
                    </div>
                </div>

                <div className="lower-container">
                    <div>
                        <h3> {name} </h3>
                        <h5><i className="fas fa-briefcase"> {job}</i></h5>
                        <h5><i className="fas fa-envelope"> {email}</i></h5>
                        <h5><i className="fas fa-home"> {address}</i></h5>
                        <h5><i className="fas fa-phone-alt"> {phone}</i></h5>
                    </div>
                    <div>
                        <Link to="/editProfile" className="btn"><Button variant="primary" type="button">Edit Profile</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;