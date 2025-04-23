import { Link } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";

function PostsList() {

    const { posts } = usePosts();

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