import React from "react";

export default function NavButton(props) {

    const styles = {
        backgroundColor: props.open ? "#faf9f6" : "#010203",
        color: props.open ? "#010203" : "#faf9f6",
    };

    return (
        <>
            {!props.open && <div
                className="nav-button col-6 col-md-3 flex-content-center py-2 nonselectable header-standard"
                style={styles}
                onClick={props.toggleNav}
            >
                <p>{props.name}</p>
            </div>}

            {props.open && <div
                className="nav-button deep-shadow col-6 col-md-3 flex-content-center py-2 nonselectable header-standard"
                style={styles}
                onClick={props.toggleNav}
            >
                <p>{props.name}</p>
            </div>}

        </>
    )
}


