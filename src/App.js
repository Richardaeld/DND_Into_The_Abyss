// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
// import React from 'react';

// html content
import NavButton from "./components/html/buttons/NavButton";
import SpellButton from './components/html/buttons/SpellButton'
import SuccessNewButton from './components/html/buttons/SuccessNewButton'
import OutContainer from './components/html/OutContainer';

// import Header from './components/html/semantic/Header'
import SpellsContainer from './components/html/semantic/section/SpellsContainer';
import HeaderNavButtons from './components/html/semantic/header/HeaderNavButtons'
// import toggleSpellNav from './components/async/toggleSpellNav';


function App() {

// ---------------------------------------------------------------- Fetches ----------------------------------------------------------------
  // ------------------------------------Active elements
  const [spellInfo, setSpellInfo] = React.useState([])
  const [subNavNames, setSubNavNames] = React.useState([])

  // content obj

  // return output obj
  const [outTarget, setOutTarget] = React.useState(["", "Welcome to DM Tool, a friendly quick reference for DMs and Players alike!"])


  function toTop() {
    window.scrollTo(0,0)
  }

  // Special toggle function for finding non general item, spells
  function toggleSpellNav (id, name, level) {
    // IIV Fetch for getting single spell by id
    if (level !== undefined) {
      (async () => {
        const response = await fetch(`https://dnd-rolling-chart-api.herokuapp.com/api/spells/spellById/${id}`)
        const jsonData = await response.json();

        setSubNavNames([])
        setSpellInfo(jsonData['spell'])

        console.log('Spell Info', jsonData['spell'])
      })();
    // IIV Fetch for getting spells by level
    } else {
      (async () => {
        const level = name[3]
        const response = await fetch(`https://dnd-rolling-chart-api.herokuapp.com/api/spells/spellsByLevel/${level}`)
        const jsonData = await response.json();

        setSubNavNames(jsonData['spells'])

        // console.log("toggleSpellNav -- find spells by level", jsonData['spells'])
      })();
    }
  }



    // Sets Sub Header Buttons and rolls random numbers for content
  function toggleNewNav(id, name, objName, childContent) {
    console.log("ID: ", id, " Name: ", name, " Obj Name: ", objName, " Child Content: ", childContent)

    // Rolls number for Dice (tables with random_roll_only: true)
    if (childContent) {
      setOutTarget([Math.floor(Math.random()*name + 1), ""])
    // Gets Sub Header Child Content
    } else {
      (async () => {
        try {
          const response = await fetch(`https://dnd-rolling-chart-api.herokuapp.com/api/button/sub/viewAll/children/${id}`);
          const jsonData = await response.json();
          var rollContent = jsonData['button']
          var index = Math.floor(Math.random()*rollContent.length + 1)

          setOutTarget([index, rollContent[index]['value']])

          // console.log("toggleNewNav", jsonData['content'])
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }

// const spellInfoElement = spellInfo.map((info) => (
//   <SpellButton
//     key={info.name}
//     name={info.name}
//     level={info.level}
//     castingTime={info.casting_time}
//     reaction_condition={info.reaction_condition}
//     range={info.range}
//     duration={info.duration}
//     ritual={info.ritual}
//     component_somatic={info.component_somatic}
//     component_verbal={info.component_verbal}
//     component_material={info.component_material}
//     material_description={info.material_description}
//     school={info.school}
//     description={info.description}
//     classes={info.classes}
//     higher_levels={info.higher_levels}
//     open={true}
//   />
// ))

  // ------------------------------------DOM return
  return (
    <main>
      <HeaderNavButtons
        setOutTarget={setOutTarget}
        setSpellInfo={setSpellInfo}
        setSubNavNames={setSubNavNames}
        subNavNames={subNavNames}
        toggleNewNav={toggleNewNav}
        toggleSpellNav={toggleSpellNav}
      />


      {/* {!spellLevelButtons.length === 0 &&
        <section className="container-fluid index-background my-5 py-4" id="spells">
          <div className="row justify-content-center">
            {allspellsElements}
          </div>
          <div className="col-1 arrow-flex-position" id="arrow-to-top" onClick={toTop}>
              <div className="arrow-container">
                  <div className="arrow-head"></div>
                  <div className="arrow-base"></div>
              </div>
            </div>
        </section>
       } */}

      <SpellsContainer
        // setSpellInfo={setSpellInfo}
        spellInfo={spellInfo}
      />



      <section className="container-fluid" id="consoleOutput">
          {(outTarget[1] || outTarget[0]) && <OutContainer
            num = {outTarget[0]}
            content = {outTarget[1]}
            // num = {getDataTest}
            // content = {getDataTest}
          />
          }
      </section>
      <footer className="mb-5"></footer>
    </main>
  )
}

export default App;
