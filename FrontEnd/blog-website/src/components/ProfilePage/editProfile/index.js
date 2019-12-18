/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React, { Fragment, useState, useContext } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';
import userService from '../../../services/userService';
import AuthContext from '../../../contexts/auth';
import profileValidator from '../../../utils/editProfileValidator';
const editProfile = (props) => {

    const [user, setUserStatus] = useContext(AuthContext);

    const [job, setJob] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    // const [profilePicture,setPicture] = useState('');

    // const myWidget = cloudinary.createUploadWidget({
    //     cloudName: 'kganev',
    //     apiKey: '743583788768284',
    //     uploadPreset: 'softuni'
    // }, (error, result) => {
    //     if (!error && result && result.event === "success") {
    //         // profilePicture = result.info.url;
    //         console.log('Done! Here is the image info: ', result.info);
    //     }
    // })

    const updateJob = e => {
        setJob(e.target.value);
    }

    const updateEmail = e => {
        setEmail(e.target.value);
    };

    const updateAddress = e => {
        setAddress(e.target.value);
    };

    const updatePhone = e => {
        setPhone(e.target.value);
    }

    const handleSubmit = () => {

        if (profileValidator(job, email, address, phone)) {

            userService.edit(user.userId, job, email, address, phone).then(() => {
                setUserStatus({ loggedIn: true, userId: user.userId, name: user.name, job, email, address, phone });
            }).then(() => {
                props.history.push('/profile');
            });
        }
    }

    return (
        <Fragment>
            <Container>
                {/* <button id="upload_widget" onClick={() => myWidget.open()} className="cloudinary-button">Upload avatar</button> */}
                <Form style={{ marginTop: '100px', textAlign: 'center' }}>
                    <Row className="justify-content-md-center">
                        <Form.Group>
                            <Form.Label>Job</Form.Label>
                            <Form.Control type="text" name="job" style={{ textAlign: 'center' }} placeholder="Enter job" onChange={updateJob} />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email" style={{ textAlign: 'center' }} placeholder="Enter email" onChange={updateEmail} />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name="address" style={{ textAlign: 'center' }} placeholder="Enter address" onChange={updateAddress} />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" name="phone" style={{ textAlign: 'center' }} placeholder="Enter phone number" onChange={updatePhone} />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Button variant="primary" type="button" onClick={handleSubmit}>
                            Edit Profile
                        </Button>
                    </Row>
                </Form>
            </Container>
        </Fragment>
    );
}

export default editProfile;