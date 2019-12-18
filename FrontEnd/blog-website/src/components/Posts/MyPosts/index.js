import React, { useContext, useEffect,useState } from 'react';
import './styles.css';
import Post from '../Post';
import postService from '../../../services/postService';
import AuthContext from '../../../contexts/auth';


const MyPosts = (props) => {

    const [user] = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getPost().then(posts => {
            const myPostsArray = posts.data.filter(p => p.author._id === user.userId);
            setPosts(myPostsArray);
        });
    },[user.userId]);

    return (
        posts.length !== 0 ?
            <div> {posts.map(post => {
                        return <Post
                            key={post._id}
                            id={post._id}
                            description={post.description}
                            title={post.title}
                             author={post.author.username}/>
                    })} </div> :
            <div className="Posts">
                <h1>You haven't created any posts yet!</h1>
            </div>
    );

}

// class MyPosts extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: null,
//             title: null,
//             body: null,
//             posts: [],
//         }
//     }

//     componentDidMount() {

//         postService.getPost().then(posts => {
//             console.log(posts.data);
//             // const myPostsArray = posts.data.filter(p => p.author._id === user);
//             this.setState({posts: posts.data});
//         });
//     }

//     render() {
//         const { posts } = this.state;
//         return posts.length !== 0 ?
//             <div> {posts.map(post => {
//                         return <Post
//                             key={post._id}
//                             id={post._id}
//                             description={post.description}
//                             title={post.title}
//                              author={post.author.username}/>
//                     })} </div> :
//             <div className="Posts">
//                 <h1>You haven't created any posts yet!</h1>
//             </div>;
//     }
// }

export default MyPosts;