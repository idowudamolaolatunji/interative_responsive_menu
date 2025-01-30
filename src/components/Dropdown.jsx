import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

function Dropdown({ title }) {
  return (
    <div className="dropdown--box">
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
                <img src="https://www.outofhours-kidsclub.com/wp-content/uploads/2017/07/kids-with-balloons.jpg" alt="img" />
                <p>view All Avaliable {title} <MdArrowOutward /> </p>
            </div>

        </div>
    </div>
  )
}

export default Dropdown
