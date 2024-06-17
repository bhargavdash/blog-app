import "./App.css";
// import Header from "./components/Header";
import Layout from "./components/Layout";
// import Post from "./components/Post";
import { Route, Routes } from "react-router-dom";
import Indexpage from "./pages/Indexpage";
import Loginpage from "./pages/Loginpage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./components/UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <>
     <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Indexpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
    </>
  );
}

export default App;
