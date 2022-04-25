import React, { FC } from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Navbar: FC = () => {
  let user;
  const handleLogout = (): void => {

  }

  return (
    <nav className="mt-2">
            {user && <Button color="danger" className="btn-sm float-right" onClick={handleLogout}>Logout</Button>}

            {
                !user && (
                    <>
                        <NavLink to="/" className="btn btn-link btn-sm float-right" style={({ isActive }) => ({ color: isActive ? 'btn btn-primary text-white' : '' })}>
                            Home
                        </NavLink>

                        <NavLink to="/register" className="btn btn-link btn-sm float-right" style={({ isActive }) => ({ color: isActive ? 'btn btn-primary text-white' : '' })}>
                            Register
                        </NavLink>

                        <NavLink to="/login" className="btn btn-link btn-sm float-right" style={({ isActive }) => ({ color: isActive ? 'btn btn-primary text-white' : '' })}>
                            Login
                        </NavLink>
                    </>
                )
            }
        </nav>
  )
}

export default Navbar