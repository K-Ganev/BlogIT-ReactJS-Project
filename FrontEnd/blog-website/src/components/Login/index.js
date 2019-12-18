import React, { Fragment, useContext ,useState } from 'react';
import userService from '../../services/userService'
import loginValidator from '../../utils/loginValidator';
import { Form, Button, Container, Row, Nav } from 'react-bootstrap';
import { AuthContext } from '../../contexts/auth';
// import { debounce } from 'lodash';

const Login = (props) => {

  // eslint-disable-next-line
  const [user,setUserStatus] = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateName = e => {
      setUsername(e.target.value);
  };

  const updatePassword = e => {
      setPassword(e.target.value);
  };

  const handleSubmit = e => {

      if (loginValidator(username, password)) {
          userService.login(username, password).then((info) => {
            
            const { job,email,address,phone } = info;
            setUserStatus({loggedIn: true, userId: info._id, name: username, job, email, address, phone})
            props.history.push('/latest');
          });
      }
  };

  // const debounce = (fn, delay) => {
  //   let timerId;
  //   return function (...args) {
  //     if (timerId) {
  //       clearTimeout(timerId);
  //     }
  //     timerId = setTimeout(() => {
  //       fn(...args);
  //       timerId = null;
  //     }, delay);
  //   }
  // }

    return (
      <Fragment>
        <Container>
          <Form style={{ marginTop: '100px', textAlign: 'center' }}>
            <Row className="justify-content-md-center">
              <Form.Group>
                <Form.Label style={{ textJustify: 'center' }}>Username</Form.Label>
                <Form.Control type="text" name="username" style={{ textAlign: 'center' }} placeholder="Enter Username" onChange={updateName} />
              </Form.Group>
            </Row>
            <Row className="justify-content-md-center">
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" style={{ textAlign: 'center' }} placeholder="Enter Password" onChange={updatePassword} />
                <Form.Text className="text-muted" style={{ textAlign: 'center' }}>
                  Don't have an account?
                <Nav.Link href="/register">Register</Nav.Link>
                </Form.Text>
              </Form.Group>
            </Row>
            <Row className="justify-content-md-center">
              <Button variant="primary" type="button" onClick={handleSubmit}>
                Login
            </Button>
            </Row>
          </Form>
        </Container>
      </Fragment>
    );
  }
  
export default Login;