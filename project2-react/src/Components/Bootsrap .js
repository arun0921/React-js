import {Link} from "react-router-dom";

let Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
   <Link className="navbar-brand" to="/">Navbar</Link>
    <Link  className="nav-link" to="/AddColour">AddColour</Link>
    <Link  className="nav-link" to="/AddMovies">AddMovies</Link>
    <Link  className="nav-link" to="*"></Link>
  </div>
</nav>
        </>
    )
}
export default Header;

<a className="nav-link disabled">Disabled</a>