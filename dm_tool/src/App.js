// import logo from './logo.svg';
import './App.css';

import React from 'react';

import NavButton from "./components/NavButton";
import NavButtonNames from "./components/NavButtonNames";
import Dice from "./components/Dice";
import TotalDice from "./components/TotalDice";
import OutContainer from './components/OutContainer';
import NarrowMissMelee from './components/NarrowMissMelee';
import NarrowMissRanged from './components/NarrowMissRanged';
import NarrowMissMagic from './components/NarrowMissMagic';
import NarrowMissButtons from './components/NarrowMissButtons';
import SuccessButton from './components/SuccessButton'
function App() {
// ------------------------------------Active elements
  const [navNames, setNavNames] = React.useState(NavButtonNames)
  const [navDice, setNavDice] = React.useState(TotalDice)
  const [outTarget, setOutTarget] = React.useState("")
  const [narrowSuccessMelee, setNarrowSuccessMelee] = React.useState(NarrowMissMelee)
  const [narrowSuccessRanged, setNarrowSuccessRanged] = React.useState(NarrowMissRanged)
  const [narrowSuccessMagic, setNarrowSuccessMagic] = React.useState(NarrowMissMagic)
  const [narrowSuccessButtons, setNarrowSuccessButtons] = React.useState(NarrowMissButtons)

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

    // Reveal navigation sub buttons
    if (targetId == "dice"){
      setNavDice(prev => {
        return prev.map((prevState) => {
          return prevState.open ? {...prevState, open: !prevState.open} : {...prevState, open: !prevState.open}
        })
      })
    } else if (targetId == "narrow") {
      setNarrowSuccessButtons(prev => {
        return prev.map((prevState) => {
          return prevState.open ? {...prevState, open: !prevState.open} : {...prevState, open: !prevState.open}
        })
      })
    }



    // Reveal nav button content
    setNavNames(prevNavNames => {
      return prevNavNames.map((navName) => {
        return navName.id === id ? {...navName, open: !navName.open} : navName
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
      <header>
        {navElements}
        <OutContainer
          content = {outTarget}
        />
      </header>

      {/* Dice Section */}
      <section>
        <div className="activeItem col-12" id="dice">
          <div className="row no-gutters justify-content-around">
            {navDiceElements}
            {narrowMissElements}
          </div>
        </div>
      </section>

      {/* Narrow Miss Section */}
      <div className="activeItem col-12 make-invis" id="narrowMiss">
        <h1>Narrow Miss</h1>
        <div className="row no-gutters justify-content-center">
            <div className="subactiveItem col-3 dice narrow-Miss" id="meleedice50">
                <h1>Melee</h1>
                <h1 className="make-invis">melee</h1>
            </div>
            <div className="subactiveItem col-3 dice narrow-Miss" id="rangedice50">
                <h1>Range</h1>
                <h1 className="make-invis">range</h1>
            </div>
            <div className="subactiveItem col-3 dice narrow-Miss" id="spelldice50">
                <h1>Magic</h1>
                <h1 className="make-invis">spell</h1>
            </div>
        </div>
        <hr/>
      </div>


    </main>
  )
}

export default App;
