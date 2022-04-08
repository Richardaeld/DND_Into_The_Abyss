import React from "react"

export default function Spells(props) {

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-3">
                            <p className="mb-0">Name</p>
                            <p><strong>{props.name}</strong></p>
                        </div>
                        <div className="col-3">
                            <p className="mb-0">Casting Time</p>
                            <p><strong>{props.castingTime}</strong></p>
                        </div>
                        <div className="col-3">
                            <p className="mb-0">Range</p>
                            <p><strong>{props.range}</strong></p>
                        </div>
                        <div className="col-3">
                            <p className="mb-0">Duration</p>
                            <p><strong>{props.duration}</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-3">
                            <p className="mb-0">Type</p>
                            <p><strong>{props.type}</strong></p>
                        </div>
                        <div className="col-3">
                            <p className="mb-0">Ritual</p>
                            {props.ritual && <p><strong>True</strong></p>}
                            {!props.ritual && <p><strong>False</strong></p>}

                        </div>
                        <div className="col-3">
                            <p className="mb-0">School</p>
                            <p><strong>{props.school}</strong></p>
                        </div>
                        <div className="col-3">
                            <p className="mb-0">Components</p>
                            <p><strong>{props.components}</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <p className="mb-0">Description</p>
                            <p><strong>{props.description}</strong></p>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="row justify-content-between">
                        <div className="col-3">
                            <p className="mb-0">classes</p>
                            <p><strong>{props.classes.map(x => x + " ")}</strong></p>
                        </div>
                        <div className="col-3">
                            <p className="mb-0">tags</p>
                            <p><strong>{props.tags.map(x => x + " ")}</strong></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}