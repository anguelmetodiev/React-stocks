import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="Navbar">
            <Link to={"/stocks"} className="nav-item">Home</Link>
            <Link to={"/about"} className="nav-item">About</Link>
        </div>
    )
}