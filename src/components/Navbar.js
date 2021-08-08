import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="companyname">
                    BANKDATA
                </div>
                <div className="right">
                    <NavLink exact activeClassName="active_class" to="/all-banks">
                        All banks
                    </NavLink>
                    <NavLink activeClassName="active_class" to="/Favourites">
                        Favourites
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar
