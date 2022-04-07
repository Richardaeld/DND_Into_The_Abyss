// import logo from './logo.svg';
import './App.css';
import React from 'react';

// buttons objects
import NavButton from "./components/buttons/NavButton";
import Dice from "./components/buttons/Dice";
import NarrowMissButtons from './components/objects/buttons/NarrowMissButtons';
import SuccessButton from './components/buttons/SuccessButton'
// content objects
import NavButtonNames from "./components/objects/buttons/NavButtonNames";
import TotalDice from "./components/objects/buttons/TotalDice";
import NarrowMissMelee from './components/objects/content/NarrowMissMelee';
import NarrowMissRanged from './components/objects/content/NarrowMissRanged';
import NarrowMissMagic from './components/objects/content/NarrowMissMagic';
import WildMagicRaw from './components/objects/content/WildMagicRaw';
import WildMagicHomeBrew from './components/objects/content/WildMagicHomeBrew';
import MagicItemTableA from './components/objects/content/MagicItemTableA';
// output object
import OutContainer from './components/OutContainer';

function App() {
// ------------------------------------Active elements
// button obj
  const [navNames, setNavNames] = React.useState(NavButtonNames)
  const [navDice, setNavDice] = React.useState(TotalDice)
  const [narrowSuccessButtons, setNarrowSuccessButtons] = React.useState(NarrowMissButtons)
  // content obj
  const [narrowSuccessMelee, setNarrowSuccessMelee] = React.useState(NarrowMissMelee)
  const [narrowSuccessRanged, setNarrowSuccessRanged] = React.useState(NarrowMissRanged)
  const [narrowSuccessMagic, setNarrowSuccessMagic] = React.useState(NarrowMissMagic)
  const [wildMagicHomeBrew, setWildMagicHomeBrew] = React.useState(WildMagicHomeBrew)
  const [wildMagicRaw, setwildMagicRaw] = React.useState(WildMagicRaw)
  const [magicItemTableA, setmagicItemTableA] = React.useState(MagicItemTableA)
  // return output obj
  const [outTarget, setOutTarget] = React.useState("Welcome to DM Tool a friendly quick reference for DMs and Players a like!")
// ------------------------------------Functions to change elements
  // Rolls dice and renders to DOM
  function rollDice(id, num) {
    const diceRoll = Math.floor(Math.random()*num + 1)
    setOutTarget(diceRoll)
  }

// run success logic
  function successLogic(id, name) {
    var text = ""
    if (name == "Melee") {
      const diceRoll = Math.floor(Math.random()*narrowSuccessMelee.length + 1)
      text = narrowSuccessMelee[diceRoll].value

    } else if (name == "Ranged") {
      const diceRoll = Math.floor(Math.random()*narrowSuccessRanged.length + 1)
      text = narrowSuccessMelee[diceRoll].value

    } else if (name == "Magic") {
      const diceRoll = Math.floor(Math.random()*narrowSuccessMagic.length + 1)
      text = narrowSuccessMelee[diceRoll].value

    }
    setOutTarget(text)
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

  const narrowMissElements = narrowSuccessButtons.map(successButton => (
    <SuccessButton
      key={successButton.name}
      name={successButton.name}
      open={successButton.open}
      click={() => successLogic(successButton.id, successButton.name)}
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
            {/* <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6"> */}
                {navDiceElements}
                {narrowMissElements}
              {/* </div>
            </div> */}
          </div>
        </div>
      </header>

      {/* Dice Section */}
      <section className="container-fluid">
          <OutContainer
            content = {outTarget}
          />
      </section>

    </main>
  )
}

export default App;
