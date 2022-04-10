import React from "react"

export default function Spells(props) {

    return (
        <div className="row justify-content-center">
            <div className="col-11 spell-display">
                <div className="row my-4 mx-3">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3">
                                <p className="mb-0 spell-key">Name</p>
                                <p><strong>{props.name}</strong></p>
                            </div>
                            <div className="col-3">
                                <p className="mb-0 spell-key">Casting Time</p>
                                <p><strong>{props.castingTime}</strong></p>
                            </div>
                            <div className="col-3">
                                <p className="mb-0 spell-key">Range</p>
                                <p><strong>{props.range}</strong></p>
                            </div>
                            <div className="col-3">
                                <p className="mb-0 spell-key">Duration</p>
                                <p><strong>{props.duration}</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-4">
                                <p className="mb-0 spell-key">Type</p>
                                <p><strong>{props.type}</strong></p>
                            </div>
                            <div className="col-4">
                                <p className="mb-0 spell-key">Ritual</p>
                                {props.ritual && <p><strong>True</strong></p>}
                                {!props.ritual && <p><strong>False</strong></p>}

                            </div>
                            <div className="col-4">
                                <p className="mb-0 spell-key">School</p>
                                <p><strong>{props.school}</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <p className="mb-0 spell-key">Description</p>
                                <p><strong>{props.description}</strong></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <div className="col-1 arrow-flex-position" id="arrow-to-top" onClick={props.toTop}>
                                <div className="arrow-container">
                                    <div className="arrow-head"></div>
                                    <div className="arrow-base"></div>
                                </div>
                            </div>
                            <div className="col-2">
                                <p className="mb-0 spell-key">classes</p>
                                <p><strong>{props.classes.map(x => x + " ")}</strong></p>
                            </div>
                            <div className="col-6">
                                <p className="mb-0 spell-key">Components</p>
                                <p><strong>{props.components}</strong></p>
                            </div>
                            <div className="col-2">
                                <p className="mb-0 spell-key">tags</p>
                                <p><strong>{props.tags.map(x => x + " ")}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}