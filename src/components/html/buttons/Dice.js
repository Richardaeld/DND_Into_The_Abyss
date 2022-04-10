import React from "react"

export default function Dice(props) {


    const styles = {
        display: props.open ? "inline-block": "none"
    }

    return (

        <div
            style={styles}
            className="nonselectable hand-drawn-text hand-drawn-container hand-drawn-border"
            id={"rolldice" + props.name}
            onClick={props.click}
        >
            <p><strong>D{props.name}</strong></p>

        </div>
    )
}