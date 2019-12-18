import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Post = ({ id, title, description, author }) => {
    return (
        <div className="Post">
            <Card border="secondary" className="text-center" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/react-logo.png" className="card-image"/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/post/${id}`}> <Button variant="primary">Full Post</Button> </Link>
                </Card.Body>
                <Card.Footer className="text-muted">Author: <strong>{author}</strong></Card.Footer>
            </Card>
        </div>
    );
};

export default Post;