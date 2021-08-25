import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div>
        <NavLink to="/shopping">Shipping</NavLink>
        <NavLink to="/grocery-list">Grocery List</NavLink>
      </div>
    </div>
  );
}

export default Navbar