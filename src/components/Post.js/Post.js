import React, { useEffect, useState } from 'react';
import './Post.css';

const Post = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div className='container'>
            <h1>Post:{posts.length} </h1>
            {posts.map(post => <ShowPost title={post.title} body={post.body}></ShowPost>)}
        </div>
    );
};

const ShowPost = (props) => {
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </article>
    )
};

export default Post;