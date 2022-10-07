// import React from "react"

import globeIcon from "../assets/globe-icon.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-content">
                <img src={globeIcon} className="globe-icon"/>
                <p className="page-title">My Travel Journal</p>
            </div>
            
        </nav>
    )
}