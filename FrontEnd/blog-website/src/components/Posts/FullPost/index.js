import React, { useEffect, useState, useContext, Fragment } from 'react';
import postService from '../../../services/postService';
import AuthContext from '../../../contexts/auth';
import './styles.css';

const FullPost = (props) => {

    const postId = props.match.params.id;
    const [user] = useContext(AuthContext);

    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [areSame, setSame] = useState(false);

    useEffect(() => {
        postService.getPost(postId).then(res => {
            setTitle(res.data.title);
            setContent(res.data.content);
            
            // console.log(res.data.author.posts);
            // console.log(res.data.content.split('\n'));
            if (res.data.author._id === user.userId) {
                setSame(true);
            }
        });
    }, [postId,user.userId]);

    const deletePost = () => {
    
        postService.delete(postId).then(() => {
            props.history.push('/myPosts');
        }).catch(err => console.log(err));
    }

    return (
        <Fragment>
             <div className="fullPost">
                <h1>{title}</h1>
                <div>{content}</div>
            </div>
            {areSame ? <button className="delete" type="button" onClick={deletePost}>Delete post</button> : null}
        </Fragment>
    );
};

export default FullPost;