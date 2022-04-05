// import logo from './logo.svg';
import './App.css';

import React from 'react'

import NavButton from "./components/NavButton"
import NavButtonNames from "./components/NavButtonNames"
import Dice from "./components/Dice"
import TotalDice from "./components/TotalDice"
import OutContainer from './components/OutContainer';

function App() {
// ------------------------------------Active elements
  const [navNames, setNavNames] = React.useState(NavButtonNames)
  const [navDice, setNavDice] = React.useState(TotalDice)
  const [outTarget, setOutTarget] = React.useState("")


// ------------------------------------Functions to change elements
  // Rolls dice and renders to DOM
  function rollDice(id, num) {
    const diceRoll = Math.floor(Math.random()*num + 1)
    setOutTarget(diceRoll)
  }

  // Toggle visibility of sub nav buttons
  function toggleNav(id, targetId) {

    // Reveal dice buttons
    if (targetId == "dice"){
      setNavDice(prev => {
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

// ------------------------------------






  return (
    <main>
      <header>
        {navElements}
        <OutContainer
          content = {outTarget}
        />
      </header>

      {/* Dice section */}
      <section>
        {/* <div className="activeItem col-12 make-invis" id="dice"> */}
        <div className="activeItem col-12" id="dice">
          <div className="row no-gutters justify-content-around">
            {navDiceElements}
          </div>
        </div>
      </section>

    </main>
  )
}

export default App;
