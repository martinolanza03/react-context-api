import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function PostsPage() {

    const { id } = useParams();
    console.log(id);

    const [posts, setPosts] = useState([]);

    function getPost() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPosts(res.data);

            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(getPost, [])


    return <>
        <h1>Dettagli post</h1>
        <h2>{posts.title}</h2>
        <p>{posts.body}</p>
    </>
}

export default PostsPage;