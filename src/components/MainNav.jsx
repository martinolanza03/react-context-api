import { NavLink } from "react-router-dom";

function MainNav() {
    return <nav>

        <ul>
            <li><NavLink to="/">Home Page</NavLink></li>
            <li><NavLink to="/chi-siamo">About</NavLink></li>
            <li><NavLink to="/lista-post">Lista Post</NavLink></li>
        </ul>

    </nav>
}

export default MainNav;