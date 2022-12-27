import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const links = [
    {
      key: "Nav1",
      route: "/Activities",
      placeholder: "Activities",
      shouldDisplay: true,
    },
    {
      key: "Nav2",
      route: "/Routines",
      placeholder: "Routines",
      shouldDisplay: true,
    },
    {
      key: "Nav3",
      route: "/MyRoutines",
      placeholder: "My Routines",
      shouldDisplay: loggedIn,
    },
    {
      key: "Nav4",
      route: "/Logout",
      placeholder: "Log out",
      shouldDisplay: loggedIn,
      onClick: () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
      },
    },
    {
      key: "Nav5",
      route: "/Register",
      placeholder: "Register",
      shouldDisplay: !loggedIn,
    },
    {
      key: "Nav6",
      route: "/Login",
      placeholder: "Login",
      shouldDisplay: !loggedIn,
    },
  ];
  return (
    <div className="Navbar">
      <Link className="NavTitle" to={"/"}>
        Fitness Tracker
      </Link>
      <div className="NavMenuItems">
        {links.map((link) => {
          const {
            key,
            route,
            placeholder,
            shouldDisplay,
            onClick = () => {},
          } = link;
          if (shouldDisplay) {
            return (
              <div key={key}>
                <Link className="NavLink" to={route} onClick={onClick}>
                  {placeholder}
                </Link>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Navbar;