import React from 'react'

export default function SuccessButton(props) {

    const styles = {
        // display: props.open ? "inline-block" : "none"
        display: true ? "inline-block" : "none"
    }

    // console.log("I AM PROPS", props.obj_name)

    return (
        <div
            style={styles}
            className="nonselectable hand-drawn-text hand-drawn-container hand-drawn-border"
            onClick={props.click}
        >
            {/* <p><strong>{props.name}</strong></p> */}
            <p><strong>{props.obj_name ? props.obj_name : props.name}</strong></p>

        </div>
    )
}