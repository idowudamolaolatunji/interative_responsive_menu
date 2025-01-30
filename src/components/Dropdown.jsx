import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

import img from "../assets/kids-with-balloons.jpg"
import { useWindowSize } from 'react-use'

function Dropdown({ title }) {
    const { width } = useWindowSize();


  return (
    <div className={width > 820 ? "dropdown--box" : ""}>
        <div className="dropdown--grid">

            <div className="dropdown--item">
                <h3>View all {title}</h3>
                <p>Animal Kindom Logge</p>
                <p>Aulani</p>
                <p>Bay Lake Tower</p>
                <p>Beach Club</p>
                <p>Broadwalk</p>
                <p>Boulder Ridge</p>
            </div>
            <div className="dropdown--item">
                <p>Copper Creek</p>
                <p>Grand Californian</p>
                <p>Grand FLoridian</p>
                <p>Hilton Heade</p>
                <p>Old Key West</p>
                <p>Polynesian</p>
            </div>
            <div className="dropdown--item">
                <p>Riviera</p>
                <p>Saratoga Spring</p>
                <p>Cabins at Disney's Fort Wilderness Lodge</p>
                <p>Villas at Disneyland Hotel</p>
                <p>Vero Beach</p>
            </div>

            <div className="dropdown--card">
                <img src={img} alt="img" />
                <p>view All Avaliable {title} <MdArrowOutward /> </p>
            </div>

        </div>
    </div>
  )
}

export default Dropdown
