// import logo from './logo.svg';
import './App.css';
import React from 'react';

// html content
import Dice from "./components/html/buttons/Dice";
import NavButton from "./components/html/buttons/NavButton";
import SpellButton from './components/html/buttons/SpellButton'
import SuccessButton from './components/html/buttons/SuccessButton'
import OutContainer from './components/html/OutContainer';

// buttons objects
import MagicItemButtons from './components/objects/buttons/MagicItemButtons';
import NarrowMissButtons from './components/objects/buttons/NarrowMissButtons';
import NavButtonNames from "./components/objects/buttons/NavButtonNames";
import SpellButtons from './components/objects/buttons/SpellButtons';
import TotalDice from "./components/objects/buttons/TotalDice";
import WildMagicButtons from './components/objects/buttons/WildMagicButtons';

// content objects
import MagicItemTableA from './components/objects/content/MagicItemTableA';
import NarrowMissMagic from './components/objects/content/NarrowMissMagic';
import NarrowMissMelee from './components/objects/content/NarrowMissMelee';
import NarrowMissRanged from './components/objects/content/NarrowMissRanged';
import WildMagicHomeBrew from './components/objects/content/WildMagicHomeBrew';
import WildMagicRaw from './components/objects/content/WildMagicRaw';

// json
import AllSpells from './components/json/AllSpells'

function App() {
  // ------------------------------------Active elements
  // button obj
  const [navNames, setNavNames] = React.useState(NavButtonNames)
  const [navDice, setNavDice] = React.useState(TotalDice)
  const [narrowSuccessButtons, setNarrowSuccessButtons] = React.useState(NarrowMissButtons)
  const [wildMagicButtons, setWildMagicButtons] = React.useState(WildMagicButtons)
  const [magicItemButtons, setMagicItemButtons] = React.useState(MagicItemButtons)
  const [spellButtons, setSpellButtons] = React.useState(SpellButtons)
  const [spellLevelButtons, setSpellLevelButtons] = React.useState([])
  const [spellInfo, setSpellInfo] = React.useState([])
  // content obj
  const [narrowSuccessMelee, setNarrowSuccessMelee] = React.useState(NarrowMissMelee)
  const [narrowSuccessRanged, setNarrowSuccessRanged] = React.useState(NarrowMissRanged)
  const [narrowSuccessMagic, setNarrowSuccessMagic] = React.useState(NarrowMissMagic)
  const [wildMagicHomeBrew, setWildMagicHomeBrew] = React.useState(WildMagicHomeBrew)
  const [wildMagicRaw, setWildMagicRaw] = React.useState(WildMagicRaw)
  const [magicItemTableA, setMagicItemTableA] = React.useState(MagicItemTableA)
  const [allSpells, setAllSpells] = React.useState(AllSpells)
  // return output obj
  const [outTarget, setOutTarget] = React.useState([,"Welcome to DM Tool a friendly quick reference for DMs and Players alike!"])


  // ------------------------------------Functions to change elements
  // Rolls dice and renders to DOM
  function rollDice(id, num) {
    const diceRoll = Math.floor(Math.random()*num + 1)
    setOutTarget([diceRoll])
  }

// console.log(allSpells["spells"][0]["name"])


// run success logic
  function successLogic(id, name, obj) {
    if (name == "Melee") {
      var diceRoll = Math.floor(Math.random()*narrowSuccessMelee.length + 1)
      var text = narrowSuccessMelee[diceRoll].value

    } else if (name == "Ranged") {
      var diceRoll = Math.floor(Math.random()*narrowSuccessRanged.length + 1)
      var text = narrowSuccessRanged[diceRoll].value

    } else if (name == "Magic") {
      var diceRoll = Math.floor(Math.random()*narrowSuccessMagic.length + 1)
      var text = narrowSuccessMagic[diceRoll].value

    } else if (name == "raw") {
      var diceRoll = Math.floor(Math.random()*wildMagicRaw.length + 1)
      var text = wildMagicRaw[diceRoll].value

    } else if (name == "homebrew") {
      var diceRoll = Math.floor(Math.random()*wildMagicHomeBrew.length + 1)
      var text = wildMagicHomeBrew[diceRoll].value

    } else if (name == "tableA") {
      var diceRoll = Math.floor(Math.random()*magicItemTableA.length + 1)
      var text = magicItemTableA[diceRoll].value

    } else if (name == "spells") {
      console.log("Not built yet!!")
    }


    setOutTarget([diceRoll, text])
    // console.log(outTarget)

  }


// open spell name buttons
function spellLogic(id, name, value) {
  // console.log(id, name, value)
  var output = []
  allSpells["spells"].map(x => {
    if (x["level"] == value){
      return output.push(x)
    }
  })
  console.log(output)
  setSpellLevelButtons(output)
}

function spellDisplay(name, obj) {
  [obj].map(x => Object.assign(x, {open: true}))
  let spellDescriptPosition = document.getElementById("spell-description")
  let spellDescriptPositionY = spellDescriptPosition.getBoundingClientRect()
  window.scrollTo(0, spellDescriptPositionY.y + window.pageYOffset - 15)
  setSpellInfo([obj])
}


  // Toggle visibility of sub nav buttons
  function toggleNav(id, targetId) {


    // Set all buttons to invisible
    if (!(targetId == "dice")){
      setNavDice(prev => {
        return prev.map((prevState) => {
          return {...prevState, open: false}
        })
      })
    }
    if(!(targetId == "narrow")){
      setNarrowSuccessButtons(prev => {
        return prev.map((prevState) => {
          return {...prevState, open: false}
        })
      })
    }
    if(!(targetId == "wild")){
      setWildMagicButtons(prev => {
        return prev.map((prevState) => {
          return {...prevState, open: false}
        })
      })
    }
    if(!(targetId == "items")){
      setMagicItemButtons(prev => {
        return prev.map((prevState) => {
          return {...prevState, open: false}
        })
      })
    }
    if(!(targetId == "spells")){
      setSpellButtons(prev => {
        return prev.map((prevState) => {
          return {...prevState, open: false}
        })
      })
      // removed spells from dom
      spellLogic(undefined, undefined, undefined)
      setSpellInfo([])
    }


    // Reveal navigation sub buttons
    if (targetId == "dice"){
      setNavDice(prev => {
        return prev.map((prevState) => {
          return {...prevState, open: !prevState.open}
        })
      })
    } else if (targetId == "narrow") {
      setNarrowSuccessButtons(prev => {
        return prev.map((prevState) => {
          return {...prevState, open: !prevState.open}
        })
      })
    } else if (targetId == "wild") {
      setWildMagicButtons(prev => {
        console.log(prev)
        return prev.map((prevState) => {
          return {...prevState, open: !prevState.open}
        })
      })
    } else if (targetId == "items") {
      setMagicItemButtons(prev => {
        return prev.map((prevState) => {
          return {...prevState, open: !prevState.open}
        })
      })
    } else if (targetId == "spells") {
      setSpellButtons(prev => {
        return prev.map((prevState) => {
          return {...prevState, open: !prevState.open}
        })
      })
      setOutTarget([])

    }

    // Reveal nav button content
    setNavNames(prevNavNames => {
      return prevNavNames.map((navName) => {
        return navName.id === id ? {...navName, open: !navName.open} : {...navName, open: false}
      })
    })

  }


  // ------------------------------------Creates multiple iterations from single components
  const navElements = navNames.map(navName => (
    <NavButton
      key={navName.id}
      name={navName.name}
      open={navName.open}
      target={navName.target}
      toggleNav={() => toggleNav(navName.id, navName.target)}
    />
  ))

  const navDiceElements = navDice.map(navDie => (
    <Dice
      key={navDie.id}
      name={navDie.value}
      open={navDie.open}
      click={() => rollDice(navDie.id, navDie.value)}
    />
  ))

  const narrowMissElements = narrowSuccessButtons.map(button => (
    <SuccessButton
      key={button.name}
      name={button.name}
      open={button.open}
      click={() => successLogic(button.id, button.name, button.objName)}
    />
  ))

  const wildMagicElements = wildMagicButtons.map(button => (
    <SuccessButton
      key={button.id}
      name={button.name}
      open={button.open}
      click={() => successLogic(button.id, button.name, button.objName)}
    />
  ))

  const magicItemElements = magicItemButtons.map((button) => (
    <SuccessButton
      key={button.id}
      name={button.name}
      open={button.open}
      click={() => successLogic(button.id, button.name, button.objName)}
    />
  ))

  const spellElements = spellButtons.map ((button) => (
    <SuccessButton
      key={button.id}
      name={button.name}
      open={button.open}
      value={button.value}
      click={() => spellLogic(button.id, button.name, button.value)}
    />
  ))

  const spellLevelElements = spellLevelButtons.map ((button) => (
    <SuccessButton
      key={button.name}
      name={button.name}
      open={true}
      value={button.value}
      click={() => spellDisplay(button.name, button)}
      />
  ))

const spellInfoElement = spellInfo.map((info) => (
  <SpellButton
    key={info.name}
    name={info.name}
    castingTime={info.casting_time}
    range={info.range}
    duration={info.duration}
    type={info.type}
    ritual={info.ritual}
    school={info.school}
    components={info.components.raw}
    description={info.description}
    classes={info.classes}
    tags={info.tags}
  />
))

  // ------------------------------------DOM return
  return (
    <main>

      <header className="container-fluid" >
        <div className="row">
          <div className="col-3 mt-5">
                {navElements}
          </div>
          <div className="col-9 mt-5">
            {navDiceElements}
            {narrowMissElements}
            {wildMagicElements}
            {magicItemElements}
            {spellElements}
          </div>
        </div>
      </header>

      <section id="spells">
        {spellLevelElements}
      </section>

      <section className="container-fluid spell-display mt-5" id="spell-description">
            {spellInfoElement}
      </section>

      <section className="container-fluid">
          {(outTarget[1] || outTarget[0]) && <OutContainer
            num = {outTarget[0]}
            content = {outTarget[1]}
          />
          }
      </section>
      <footer className="mb-5"></footer>
    </main>
  )
}

export default App;
