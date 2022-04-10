import React from 'react'

export default function smallSpellButton (props) {

    const styles = {
        display: props.open ? "inline-block" : "none"
    }

    return (
        <div
            style={styles}
            className="col-xl-2 col-lg-3 col-md-4 small-spell-buttons hand-drawn-text hand-drawn-container hand-drawn-border"
            onClick={props.click}
        >
            <p><strong>{props.name}</strong></p>
        </div>
    )
}