import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ListPosts from "./pages/ListPosts";
import PostDetails from "./pages/PostDetails";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/chi-siamo" Component={About} />

            <Route path="lista-post">
              <Route index Component={ListPosts} />
              <Route path=":id" Component={PostDetails} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
