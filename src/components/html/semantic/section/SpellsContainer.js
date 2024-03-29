import SpellCard from '../../general/SpellCard';

export default function SpellsContainer(props) {


    const spellInfoElement = props.spellInfo.map((info) => (
        <SpellCard
          key={info.name}
          name={info.name}
          level={info.level}
          castingTime={info.casting_time}
          reaction_condition={info.reaction_condition}
          range={info.range}
          duration={info.duration}
          ritual={info.ritual}
          component_somatic={info.component_somatic}
          component_verbal={info.component_verbal}
          component_material={info.component_material}
          material_description={info.material_description}
          school={info.school}
          description={info.description}
          classes={info.classes}
          higher_levels={info.higher_levels}
          open={true}
        />
      ))

    return (
        <div>
            {!spellInfoElement.length !== 0 &&
                <div className="container-fluid mt-5" id="spell-description">
                        {props.spellIsLoading ? <p className="loading-text">"Loading..."</p> : ""}
                        {spellInfoElement}
                </div>
            }
        </div>
    )
}