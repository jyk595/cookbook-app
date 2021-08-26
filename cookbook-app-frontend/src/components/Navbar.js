import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/"><img src="http://cookbookla.com/images/cookbook.RGB.2.new.jpg" alt="cookbook-logo" /></Link>
      <div className="nav-links-container">
        <NavLink to="/shopping" activeClassName="active-header">Shopping</NavLink>
        <NavLink to="/grocery-list" activeClassName="active-header">Grocery List</NavLink>
      </div>
    </nav>
  );
}

export default Navbar