import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import Home from "./components/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import ErrorPage from "./components/Misc/ErrorPage";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import RequireAuth from "./components/Login/RequireAuth";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/myportfolio" element={<MyPortfolio />}></Route>
                <Route path="/blogs" element={<Blogs />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                ></Route>
                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default App;
