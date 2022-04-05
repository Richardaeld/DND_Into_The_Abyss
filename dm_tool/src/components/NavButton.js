import React from "react"

export default function NavButton(props) {

    const styles = {
        backgroundColor: props.open ? "#faf9f6" : "#010203",
        color: props.open ? "#010203" : "#faf9f6"
    }

    return (

        <div
            className="col-12 nav-icon"
            style={styles}
            onClick={props.toggleNav}
        >
            <h1>{props.name}</h1>
            <span className="make-invis">{props.name}</span>
        </div>
    )
}


