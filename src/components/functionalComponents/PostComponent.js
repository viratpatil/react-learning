import React from 'react';
import { useEffect, useState } from 'react';

const PostComponent = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then ((result) => {
            setPosts(result);
        })
    }, []);

    useEffect(() => {
            console.log('Post Loaded', posts);
    }, [posts]);
       
    
    return <h1>Load Posts</h1>;
}

export default PostComponent;