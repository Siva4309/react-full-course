import React from 'react'
import Home from "./reactrouterdom/Home"
// import About from "./reactrouterdom/About"
import Contact from "./reactrouterdom/Contact"
import {Routes, Route } from "react-router-dom";
import NavBar from './reactrouterdom/NavBar';
import Success from './reactrouterdom/Success';
import NotFound from './reactrouterdom/NotFound';
import Projects from './reactrouterdom/Projects';
import FeaturedProjects from './reactrouterdom/FeaturedProjects';
import NewProjects from './reactrouterdom/NewProjects';
import Users from './reactrouterdom/Users';
import UserDetails from './reactrouterdom/UserDetails';
import { AuthProvider } from './reactrouterdom/auth';
import Login from './reactrouterdom/Login';
import Logout from './reactrouterdom/Logout';
import PrivateRoute from './reactrouterdom/PrivateRoute';
const LazyAbout = React.lazy(() => import("./reactrouterdom/About"));

function App() {

    return (
        <AuthProvider className="App">
            {/* <Index />
            <Final /> */}
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="/about" element={<React.Suspense fallback="Loading...">
                    <LazyAbout />
                </React.Suspense>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/success" element={<Success />} />
                <Route path="/projects" element={<Projects />}>
                    <Route index element={<FeaturedProjects /> } />
                    <Route path="featured" element={<FeaturedProjects />} />
                    <Route path="new" element={<NewProjects />} />
                </Route>
                <Route path="/users" element={<PrivateRoute>
                    <Users />
                </PrivateRoute>} />
                <Route path ="/users/:userId" element={<UserDetails />} />
                <Route path ="/login" element={<Login />} />
                <Route path ="/logout" element={<Logout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </AuthProvider>
    )


}

export default RoutingApp;