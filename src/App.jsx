import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import Single from "./views/Single.jsx";
import Register from "./views/auth/Register.jsx";
import Login from "./views/auth/Login.jsx";
import Dashboard from "./views/layouts/Dashboard.jsx";
import Index from "./views/dashboard/Index.jsx";
import Front from "./views/layouts/Front.jsx";
import Profile from "./views/dashboard/Profile.jsx";
import Post from "./views/dashboard/Post.jsx";
import axios from "axios";
import Category from "./views/dashboard/Category.jsx";
import {MyProvider} from "./contexts/MyProvider.jsx";
const App = () => {
    axios.defaults.baseURL = "http://127.0.0.1:3000/";
    return (
        <>
            <MyProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Front />}>
                            <Route index element={<Home />} />
                            <Route path={'single'} element={<Single />} />
                            <Route path={'auth/register'} element={<Register />} />
                            <Route path={'auth/login'} element={<Login />} />
                        </Route>

                        <Route path="/secure" element={<Dashboard />}>
                            <Route index element={<Index />} />
                            <Route path={'post/create'} element={<Post />} />
                            <Route path={'category/create'} element={<Category />} />
                            <Route path={'profile'} element={<Profile />} />
                        </Route>
                        <Route path={'*'} element={<p> Page Not Found</p>} />
                    </Routes>
                </BrowserRouter>
            </MyProvider>
        </>
    );
};
export default App;