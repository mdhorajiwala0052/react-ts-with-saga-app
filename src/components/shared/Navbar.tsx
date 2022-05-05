import React, { FC, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../types/hooks";
import { logoutInitiate } from "../../redux/features/userSlice";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

interface IProps {}
interface IState {
  isOpen: boolean;
}

const NavbarC: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const { currentUser: user } = useAppSelector((state: any) => ({
    ...state.user,
  }));

  const handleLogout = (): void => {
    dispatch(logoutInitiate());
  };

  const toggle = (): void => {
    setIsOpen(!isOpen);
    console.log("isOpen", isOpen);
  };

  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand to="/">Movie Mania</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              {user && (
                <>
                  <NavItem>
                    <p>{user?.email}</p>
                  </NavItem>

                  <NavItem>
                    <Button
                      color="danger"
                      className="btn-sm float-right"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </NavItem>
                </>
              )}

              {!user && (
                <>
                  <NavItem>
                    <NavLink
                      to="/"
                      className="btn btn-link btn-sm float-right tdnone"
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#ebe7df" : "",
                        };
                      }}
                    >
                      Home
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      to="/register"
                      className="btn btn-link btn-sm float-right tdnone"
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#ebe7df" : "",
                        };
                      }}
                    >
                      Register
                    </NavLink>
                  </NavItem>

                  <NavItem style={{ textDecoration: "none" }}>
                    <NavLink
                      to="/login"
                      className="btn btn-link btn-sm float-right tdnone"
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#ebe7df" : "",
                        };
                      }}
                    >
                      Login
                    </NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
    // <nav className="mt-2">
    //   {user && (
    //     <>
    //       <Button
    //         color="danger"
    //         className="btn-sm float-right"
    //         onClick={handleLogout}
    //       >
    //         Logout
    //       </Button>
    //       <span className="ml-5">{user?.email}</span>
    //     </>
    //   )}

    //   {!user && (
    //     <>
    //       <NavLink
    //         to="/"
    //         className="btn btn-link btn-sm float-right"
    //         style={({ isActive }) => {
    //           return {
    //             backgroundColor: isActive ? "red" : "",
    //           };
    //         }}
    //       >
    //         Home
    //       </NavLink>

    //       <NavLink
    //         to="/register"
    //         className="btn btn-link btn-sm float-right"
    //         style={({ isActive }) => {
    //           return {
    //             backgroundColor: isActive ? "red" : "",
    //           };
    //         }}
    //       >
    //         Register
    //       </NavLink>

    //       <NavLink
    //         to="/login"
    //         className="btn btn-link btn-sm float-right"
    //         style={({ isActive }) => {
    //           return {
    //             backgroundColor: isActive ? "red" : "",
    //           };
    //         }}
    //       >
    //         Login
    //       </NavLink>
    //     </>
    //   )}
    // </nav>
  );
};

export default NavbarC;
