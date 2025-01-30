import React, { useState } from 'react'
import NavLink from './NavLink'
import { useWindowSize } from 'react-use'
import { HiMenuAlt1 } from 'react-icons/hi';
import Sidebar from './Sidebar';

function Header() {
    const { width } = useWindowSize();
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleShow = function() {
        setShowMobileMenu(true)
    }

    const handleClose = function() {
        setShowMobileMenu(false);
    }

    return (
        <header className="header">
            <h2 className="logo--text">Rentals</h2>

            <nav className="header__nav">
                {width > 820 ? (
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
                ) : (
                    <ul className="nav--links">
                        <button className="nav--btn">Contact</button>
                        <div className="nav--menu" onClick={handleShow}><HiMenuAlt1 /></div>
                    </ul>
                )}
            </nav>


            {(showMobileMenu && width < 821) && (
                <Sidebar onClose={handleClose} />
            )}
        </header>
    )
}

export default Header
