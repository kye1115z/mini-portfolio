import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "./store/authSlice";
import Problems from "./pages/Problems/Problems";
import ProblemForm from "./pages/ProblemForm/ProblemForm";
import { authApi } from "./api/authApi";
import { useEffect } from "react";
import Login from "./components/Login/Login";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const data = await authApi.me();
      if (data) {
        dispatch(setUser({ username: data.username, role: data.role }));
      } else {
        dispatch(clearUser());
      }
    };
    checkAuth();
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/problems/new" element={<ProblemForm />} />
          <Route path="/problems/edit/:id" element={<ProblemForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
