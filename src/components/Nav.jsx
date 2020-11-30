import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Make me Giggle</Link>
    </nav>
  )
}

export default Nav;