import React, { Component, Fragment } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';
import postService from '../../../services/postService';
import postValidator from '../../../utils/postValidator';

class CreatePost extends Component {

  state = {
    title: '',
    description: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler = () => {

    const { title, description, content } = this.state;

    if (postValidator(title, description, content)) {
      postService.create(title, description, content).then(() => {
        this.props.history.push('/latest');
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Form style={{ marginTop: '80px', textAlign: 'center' }}>
            <Row className="justify-content-md-center">
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" style={{ textAlign: 'center' }} placeholder="Add title" onChange={this.handleChange} />
              </Form.Group>
            </Row>
            <Row className="justify-content-md-center">
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="3" name="description" type="text" style={{ textAlign: 'center' }} placeholder="Describe your post..." onChange={this.handleChange} />
              </Form.Group>
            </Row>
            <Row className="justify-content-md-center">
              <Form.Group>
                <Form.Label>Post Content</Form.Label>
                <Form.Control as="textarea" rows="7" name="content" type="text" style={{ textAlign: 'center' }} placeholder="What's on you're mind?" onChange={this.handleChange} />
              </Form.Group>
            </Row>
            <Row className="justify-content-md-center">
              <Button variant="primary" type="button" onClick={this.submitHandler}>
                Create Post
            </Button>
            </Row>
          </Form>
        </Container>
      </Fragment>
    );
  }
};

export default CreatePost;