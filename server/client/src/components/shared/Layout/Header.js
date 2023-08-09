import React from "react";
import { MdBloodtype } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    toast("LogOut Successfully");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar bg-black">
        <div className="container-fluid">
          <div className="navbar-brand">
            <MdBloodtype className="navIcon" />
            Donate Blood
          </div>
          <ul className="navbar-nav d-flex flex-row ">
            <li className="nav-item">
              <p className="nav-link">Welcome {user?.name} !</p>
            </li>
            <li className="nav-item text-white mx-3">
              <button onClick={handleLogout} className="btn btn-success">
                <FaUserAlt className="navIcon" />
                SignOut
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
