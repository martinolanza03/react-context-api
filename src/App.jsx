import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import PostsList from "./pages/PostsList";
import PostsPage from "./pages/PostsPage";
import { PostsProvider } from "./contexts/PostsContext";

function App() {

  return (
    <>
      <PostsProvider>
        <BrowserRouter>
          <Routes>

            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/chi-siamo" Component={About} />


              <Route path="lista-post">
                <Route index Component={PostsList} />
                <Route path=":id" Component={PostsPage} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>

      </PostsProvider>


    </>
  )
}

export default App
