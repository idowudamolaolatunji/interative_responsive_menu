import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Overlay from './Overlay'
import { MdArrowDropDown } from 'react-icons/md'
import Dropdown from './Dropdown';

function Sidebar({ onClose }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [title, setTitle] = useState("")

    const handleOnToggle = function(slug) {
        setShowDropdown(
            slug !== title ? true : false
        );
        setTitle(slug == title ? "" : slug);
    }
    
    return (
        <React.Fragment>
            <Overlay handleClose={onClose} />

            <div className="sidebar">
                <div className="nav--close" onClick={onClose}>
                    <AiOutlineClose />
                </div>

                <ul className="nav--links">
                    <li className="nav--item">Home</li>
                    <li className="nav--item" onClick={() =>handleOnToggle("buying")} style={ title == "buying" ? { color: "#01af86" } : {}}>
                        Buying <MdArrowDropDown />
                    </li>
                        {(showDropdown && title == "buying") && <Dropdown  title={title} />}
                    <li className="nav--item" onClick={() =>handleOnToggle("selling")} style={ title == "selling" ? { color: "#01af86" } : {}}>
                        Selling <MdArrowDropDown />
                    </li>
                        {(showDropdown && title == "selling") && <Dropdown  title={title} />}
                    <li className="nav--item" onClick={() =>handleOnToggle("listings")} style={ title == "listings" ? { color: "#01af86" } : {}}>
                        Listings <MdArrowDropDown />
                    </li>
                        {(showDropdown && title == "listings") && <Dropdown  title={title} />}
                    <li className="nav--item" onClick={() =>handleOnToggle("point-chart")} style={ title == "point-chart" ? { color: "#01af86" } : {}}>
                        Point Chart <MdArrowDropDown />
                    </li>
                        {(showDropdown && title == "point-chart") && <Dropdown  title={title} />}
                    <li className="nav--item">Blog</li>
                    <li className="nav--item">About Us</li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Sidebar
