import React, { useState } from 'react'
import NavLink from './NavLink'

function Header() {

    return (
        <header className="header">
            <h2 className="logo--text">Rentals</h2>

            <nav className="header__nav">
                <ul className="nav--links">
                    <NavLink title="Home" isLink={true} />
                    <NavLink title="Buying" hasBropdown={true} />
                    <NavLink title="Selling" hasBropdown={true} />
                    <NavLink title="Listings" hasBropdown={true} />
                    <NavLink title="Point Chart" hasBropdown={true} />
                    <NavLink title="Blog" isLink={true} />
                    <NavLink title="About Us" isLink={true} />
                    <button className="nav--btn">Contact</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header
