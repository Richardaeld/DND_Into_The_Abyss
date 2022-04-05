import React from "react"

export default function Dice(props) {


    const styles = {
        display: props.open ? "block": "none"
    }

    return (

        <div
            style={styles}
            className="subactiveItem col-3 dice"
            id={"rolldice" + props.name}
            onClick={props.click}
        >
            <h1>{props.name}</h1>

        </div>
    )
}