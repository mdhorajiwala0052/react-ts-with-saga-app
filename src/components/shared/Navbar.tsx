import React, { FC, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../types/hooks";
import { logoutInitiate } from "../../redux/features/userSlice";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const { currentUser: user } = useAppSelector((state: any) => ({
    ...state.user,
  }));

  const handleLogout = (): void => {
    dispatch(logoutInitiate());
  };

  return (
    <nav className="mt-2">
      {user && (
        <>
          <Button
            color="danger"
            className="btn-sm float-right"
            onClick={handleLogout}
          >
            Logout
          </Button>
          <span className="ml-5">{user?.email}</span>
        </>
      )}

      {!user && (
        <>
          <NavLink
            to="/"
            className="btn btn-link btn-sm float-right"
            style={({ isActive }) => ({
              color: isActive ? "btn btn-primary text-white" : "",
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/register"
            className="btn btn-link btn-sm float-right"
            style={({ isActive }) => ({
              color: isActive ? "btn btn-primary text-white" : "",
            })}
          >
            Register
          </NavLink>

          <NavLink
            to="/login"
            className="btn btn-link btn-sm float-right"
            style={({ isActive }) => ({
              color: isActive ? "btn btn-primary text-white" : "",
            })}
          >
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
