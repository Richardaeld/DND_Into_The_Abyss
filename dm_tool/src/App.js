// import logo from './logo.svg';
import './App.css';

import React from 'react'

import NavButton from "./components/NavButton"
import NavButtonNames from "./components/NavButtonNames"
import Dice from "./components/Dice"
import TotalDice from "./components/TotalDice"


function App() {
// ------------------------------------Navigation Buttons
  const [navNames, setNavNames] = React.useState(NavButtonNames)
  const [navTargets, setNavTargets] = React.useState(TotalDice)

  function rollDice(num) {
    // console.log("Here")
    // console.log(num)
    const diceRoll = Math.floor(Math.random()*num + 1)
    console.log(diceRoll)
  }

  function toggleNav(id, targetId) {
    // Reveal nav button content
    let containsTarget = document.getElementById([targetId]).classList.contains("make-invis")
    let target = document.getElementById([targetId])
    containsTarget ? target.classList.remove("make-invis") : target.classList.add("make-invis")

    // set nav button color change
    setNavNames(prevNavNames => {
      return prevNavNames.map((navName) => {
        return navName.id === id ? {...navName, open: !navName.open} : navName
      })
    })
  }

  const navElements = navNames.map(navName => (
    <NavButton
      key={navName.id}
      name={navName.name}
      open={navName.open}
      target={navName.target}
      toggleNav={() => toggleNav(navName.id, navName.target)}
    />
  ))

  const navTargetElements = navTargets.map(navTarget => (
    <Dice
      key={navTarget.id}
      name={navTarget.value}
      click={() => rollDice(navTarget.value)}
    />
  ))

// ------------------------------------Dice Rolling section






  return (
    <main>
      {navElements}

      <div className="activeItem col-12 make-invis" id="dice">
        <div className="row no-gutters justify-content-around">
          {navTargetElements}
        </div>
      </div>

    </main>
  )
}

export default App;
