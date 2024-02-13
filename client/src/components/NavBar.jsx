//Posts link
//Link to create New Post
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/">Posts Link</Link>
            {" | "}
            <Link to="/posts/new">New Post</Link>
        </nav>
    );
}

export default NavBar;

