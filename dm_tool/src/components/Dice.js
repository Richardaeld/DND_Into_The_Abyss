import React from "react"

export default function Dice(props) {


    const styles = {
        display: props.open ? "inline-block": "none"
    }

    return (

        <div
            style={styles}
            className="dice custom-button"
            id={"rolldice" + props.name}
            onClick={props.click}
        >
            <p>D{props.name}</p>

        </div>
    )
}