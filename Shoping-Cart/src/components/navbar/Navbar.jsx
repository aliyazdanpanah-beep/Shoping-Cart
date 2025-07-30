import "./Navbar.css";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="Navabar">
        <div className="NavSide">
          <span> <Link to={"/"} >Product</Link> </span>
          <span> <Link to={"/about"}>About</Link> </span>
        </div>
        <div className="NavSide">
          <span> <Link to={"/cart"}>Shoping Cart</Link> </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
