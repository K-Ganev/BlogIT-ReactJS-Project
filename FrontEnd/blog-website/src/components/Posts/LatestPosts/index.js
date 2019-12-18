import React, { Component } from 'react';
import Post from '../Post';
import './styles.css';
import postService from '../../../services/postService';

class LatestPosts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
        }
    }

    componentDidMount() {

        postService.getPost().then(posts => {
            // console.log(posts.data);
            this.setState({posts: posts.data});
        });
    }

    render() {
        const { posts } = this.state;
        return posts.length !== 0 ?
            <div> {posts.map(post => {
                        return <Post
                            key={post._id}
                            id={post._id}
                            description={post.description}
                            title={post.title}
                             author={post.author.username}/>
                    })} </div> :
            <div className="Posts">
                <h1>There are no posts created yet!</h1>
            </div>;
    }
}
export default LatestPosts;