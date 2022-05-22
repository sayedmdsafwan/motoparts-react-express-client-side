import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import Home from "./components/Home/Home";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/myportfolio" element={<MyPortfolio />}></Route>
                <Route path="/blogs" element={<Blogs />}></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
