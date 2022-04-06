import React from 'react'

export default function SuccessButton(props) {

    const styles = {
        display: props.open ? "block" : "none"
    }

    return (
        <div
            style={styles}
            className="subactiveItem col-3 dice"
            onClick={props.click}
        >
            <p>{props.name}</p>

        </div>
    )
}