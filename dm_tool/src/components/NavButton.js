import React from "react"

export default function NavButton(props) {

    const styles = {
        backgroundColor: props.open ? "#faf9f6" : "#010203",
        color: props.open ? "#010203" : "#faf9f6"
    }

    return (

        <div
            className="nav-button custom-button"
            style={styles}
            onClick={props.toggleNav}
        >
            <p>{props.name}</p>
        </div>
    )
}


