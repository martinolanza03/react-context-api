import { createContext, useState, useEffect } from "react";

const PostsContext = createContext();
function PostsProvider({ children }) {


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

    return (
        <PostsContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostsContext.Provider>
    )


}

export { PostsContext, PostsProvider };