import React from "react"

export default function NavButton(props) {

    const styles = {
        backgroundColor: props.open ? "#faf9f6" : "#010203",
        color: props.open ? "#010203" : "#faf9f6",
    }

    return (
        <>
            {!props.open && <div
                className="nav-button col-3 flex-content-center py-2 nonselectable"
                style={styles}
                onClick={props.toggleNav}
            >
                <p>{props.name}</p>
            </div>}

            {props.open && <div
                className="nav-button deep-shadow col-3 flex-content-center py-2 nonselectable"
                style={styles}
                onClick={props.toggleNav}
            >
                <p>{props.name}</p>
            </div>}

        </>
    )
}


