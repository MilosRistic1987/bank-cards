import React from "react";
import { FaHome, FaPiggyBank, FaEdit, FaCreditCard } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const navItems = [
    { navName: "Home", navIcon: FaHome, pathName: "/", id: "1" },
    { navName: "Cards", navIcon: FaCreditCard, pathName: "/cards", id: "3" },
  ];

  return (
    <div className="navBar">
      <div className="navlLogo">
        <FaPiggyBank className='fAicons' onClick={() => history.push("/")} />
        <label>Ba<span>n</span>k</label>
      </div>
      <div className="navItems">
        {navItems.map((el) => (
          <div className="navFiled" key={el.id}  onClick={() => history.push(el.pathName)}>
            <el.navIcon className='fAicons' />
            <Link to={el.pathName}>{el.navName}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
