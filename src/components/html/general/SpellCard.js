import React from "react"

// Creates Spell card
export default function Spells(props) {

    return (
        <div className="row justify-content-center">
            <div className="col-11 spell-display">
                <div className="row my-4 mx-3">
                    <div className="col-12">
                        <div className="row justify-content-around">

                            {/* Spell Name */}
                            <div className="col-6 col-md-4">
                                <p className="mb-0 spell-key">Name</p>
                                <p><strong>{props.name}</strong></p>
                            </div>

                            {/* Spell Level */}
                            <div className="col-6 col-md-4">
                                <p className="mb-0 spell-key">Level</p>
                                {props.level === 0 &&<p><strong>Cantrip</strong></p>}
                                {props.level !== 0 &&<p><strong>Level {props.level}</strong></p>}
                            </div>

                            {/* Spell Casting Time */}
                            <div className="col-6 col-md-4">
                                <p className="mb-0 spell-key">Casting Time</p>
                                <p><strong>{props.castingTime}</strong></p>
                            </div>

                            {/* Spell Reaction Condition if exists */}
                            {props.reaction_condition &&
                                <div className="col-12">
                                    <p className="mb-0 spell-key">Reaction Condition</p>
                                    <p><strong>{props.reaction_condition}</strong></p>
                                </div>
                            }

                            {/* Spell Range */}
                            <div className="col-6 col-md-4">
                                <p className="mb-0 spell-key">Range</p>
                                <p><strong>{props.range}</strong></p>
                            </div>

                            {/* Spell Duration */}
                            <div className="col-6 col-md-4">
                                <p className="mb-0 spell-key">Duration</p>
                                <p><strong>{props.duration}</strong></p>
                            </div>

                            {/* Spell Ritual */}
                            <div className="col-6 col-md-4">
                                <p className="mb-0 spell-key">Ritual</p>
                                {props.ritual && <p><strong>True</strong></p>}
                                {!props.ritual && <p><strong>False</strong></p>}
                            </div>

                            {/* Spell Somatic */}
                            <div className="col-6 col-md-4">
                                <p className="mb-0 spell-key">Somatic</p>
                                {props.component_somatic && <p><strong>True</strong></p>}
                                {!props.component_somatic && <p><strong>False</strong></p>}
                            </div>

                            {/* Spell Verbal */}
                            <div className="col-6 col-md-4">
                                <p className="mb-0 spell-key">Verbal</p>
                                {props.component_verbal && <p><strong>True</strong></p>}
                                {!props.component_verbal && <p><strong>False</strong></p>}
                            </div>

                            {/* Spell Material */}
                            <div className="col-6 col-md-4">
                                <p className="mb-0 spell-key">Material</p>
                                {props.component_material && <p><strong>True</strong></p>}
                                {!props.component_material && <p><strong>False</strong></p>}
                            </div>

                            {/* Spell Material Description if exists */}
                            {props.material_description &&
                                <div className="col-12">
                                    <p className="mb-0 spell-key">Material Description</p>
                                    {props.material_description && <p><strong>{props.material_description}</strong></p>}
                                </div>
                            }

                            {/* Spell Description */}
                            <div className="col-12">
                                <p className="mb-0 spell-key">Description</p>
                                <p><strong>{props.description}</strong></p>
                            </div>

                            {/* Spell Higher Level Description if exists */}
                            { props.higher_levels &&
                                <div className="col-12">
                                    <p className="mb-0 spell-key">Higher Level</p>
                                    <p><strong>{props.higher_levels}</strong></p>
                                </div>
                            }

                            {/* Spell School */}
                            <div className="col-6 col-md-2">
                                <p className="mb-0 spell-key">School</p>
                                <p><strong>{props.school}</strong></p>
                            </div>

                            {/* Spell available to Classes */}
                            <div className="col-6 col-md-2">
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