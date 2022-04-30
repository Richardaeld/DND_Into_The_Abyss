import React from "react"

export default function Spells(props) {

    return (
        <div className="row justify-content-center">
            <div className="col-11 spell-display">
                <div className="row my-4 mx-3">
                    <div className="col-12">
                        <div className="row justify-content-around">
                            <div className="col-6 col-md-3">
                                <p className="mb-0 spell-key">Name</p>
                                <p><strong>{props.name}</strong></p>
                            </div>
                            <div className="col-6 col-md-3">
                                <p className="mb-0 spell-key">Level</p>
                                {props.level === 0 &&<p><strong>Cantrip</strong></p>}
                                {props.level !== 0 &&<p><strong>Level {props.level}</strong></p>}
                            </div>
                            <div className="col-6 col-md-3">
                                <p className="mb-0 spell-key">Casting Time</p>
                                <p><strong>{props.castingTime}</strong></p>
                            </div>

                            {props.reaction_condition &&
                                <div className="col-12">
                                    <p className="mb-0 spell-key">Reaction Condition</p>
                                    <p><strong>{props.reaction_condition}</strong></p>
                                </div>
                            }

                            <div className="col-6 col-md-3">
                                <p className="mb-0 spell-key">Range</p>
                                <p><strong>{props.range}</strong></p>
                            </div>
                            <div className="col-6 col-md-3">
                                <p className="mb-0 spell-key">Duration</p>
                                <p><strong>{props.duration}</strong></p>
                            </div>
                            <div className="col-6 col-md-3">
                                <p className="mb-0 spell-key">Ritual</p>
                                {props.ritual && <p><strong>True</strong></p>}
                                {!props.ritual && <p><strong>False</strong></p>}
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">

                            <div className="col-6 col-md-4">
                                <p className="mb-0 spell-key">Somatic</p>
                                {props.component_somatic && <p><strong>True</strong></p>}
                                {!props.component_somatic && <p><strong>False</strong></p>}
                            </div>
                            <div className="col-6 col-md-4">
                                <p className="mb-0 spell-key">Verbal</p>
                                {props.component_verbal && <p><strong>True</strong></p>}
                                {!props.component_verbal && <p><strong>False</strong></p>}
                            </div>
                            <div className="col-6 col-md-4">
                                <p className="mb-0 spell-key">Material</p>
                                {props.component_material && <p><strong>True</strong></p>}
                                {!props.component_material && <p><strong>False</strong></p>}
                            </div>
                            {props.material_description &&
                                <div className="col-12">
                                    <p className="mb-0 spell-key">Material Description</p>
                                    {props.material_description && <p><strong>{props.material_description}</strong></p>}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <p className="mb-0 spell-key">Description</p>
                                <p><strong>{props.description}</strong></p>
                            </div>
                            { props.higher_levels &&
                                <div className="col-12">
                                    <p className="mb-0 spell-key">Higher Level</p>
                                    <p><strong>{props.higher_levels}</strong></p>
                                </div>
                            }
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="row justify-content-around">
                            {/* <div className="col-1 arrow-flex-position order-3 order-md-1" id="arrow-to-top" onClick={props.toTop}>
                                <div className="arrow-container">
                                    <div className="arrow-head"></div>
                                    <div className="arrow-base"></div>
                                </div>
                            </div> */}
                            <div className="col-6 col-md-2 order-2 order-md-3">
                                <p className="mb-0 spell-key">School</p>
                                <p><strong>{props.school}</strong></p>
                            </div>
                            <div className="col-6 col-md-2 order-1 order-md-2">
                                <p className="mb-0 spell-key">classes</p>
                                <p><strong>{props.classes}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}