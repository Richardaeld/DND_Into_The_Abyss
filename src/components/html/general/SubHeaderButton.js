import React from 'react'

export default function SuccessButton(props) {

    const styles = {
        // display: props.open ? "inline-block" : "none"
        display: true ? "inline-block" : "none"
    }

    // console.log("I AM PROPS", props.obj_name)

    var clickTrigger
    if (props.child_table !== null) {
        clickTrigger = props.clickSpells
    } else {
        clickTrigger = props.click
    }

    return (
        <div
            style={styles}
            className="nonselectable hand-drawn-text hand-drawn-container hand-drawn-border"
            onClick={clickTrigger}
        >
            <p><strong>{props.obj_name ? props.obj_name : props.name}</strong></p>

        </div>
    )
}