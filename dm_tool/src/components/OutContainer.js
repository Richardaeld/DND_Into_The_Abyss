import React from "react"

export default function OutContainer (props) {
    return (

        <div className="row">
            <div className="col-12">
                <div className="row justify-content-center">
                    <div className="col-6 output">
                        <h1 id="consoleOutput">{props.content}</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}