import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PostsList() {
    const [posts, setPosts] = useState([]);

    function listOfPosts() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data);

            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(listOfPosts, [])



    return <>
        <h1>Lista Post</h1>

        {
            posts.map(post => {
                return <ul key={post.id}>

                    <li>

                        <h2>{post.title}</h2>
                        <Link to={`/lista-post/${post.id}`}>Dettagli del post: {post.id}</Link>

                    </li>

                </ul>

            })
        }
    </>
}

export default PostsList;