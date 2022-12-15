import {Link, } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 p-2">
  <Link className="navbar-brand" to={'/'}>NewsApi</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" > Favorites <span className="sr-only">(current)</span></Link>
      <Link className="nav-item nav-link" >Features</Link>
    </div>
  </div>
</nav>
    )
}