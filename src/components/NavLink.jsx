import React, { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import Dropdown from './Dropdown';

function NavLink({ title, isLink, hasBropdown }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleOnShow = function() {
        setShowDropdown(true)
    }

    const handleOnRemove = function() {
        setShowDropdown(false)
    }

    return (
        <React.Fragment>
            {isLink && (
                <li className="nav--item">{title}</li>
            )}

            {hasBropdown && (
                <li className="nav--item"
                    onMouseEnter={handleOnShow}
                    onMouseLeave={handleOnRemove}
                >
                    {title} <MdArrowDropDown />
                </li>
            )}

            {(hasBropdown && showDropdown) && (
                <Dropdown title={title} />
            )}
        </React.Fragment>
    )
}

export default NavLink
