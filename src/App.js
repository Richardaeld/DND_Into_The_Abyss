import './App.css';
import React, {useState, useEffect} from 'react';
// import React from 'react';

import SpellsContainer from './components/html/semantic/section/SpellsContainer';
import Header from './components/html/semantic/header/Header';
import GeneralOutput from './components/html/semantic/section/GeneralOutput';

function App() {

// ---------------------------------------------------------------- Fetches ----------------------------------------------------------------
  // ------------------------------------Active elements
  const [spellInfo, setSpellInfo] = React.useState([]);
  const [subNavNames, setSubNavNames] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [generalContentIsLoading, setGeneralContentIsLoading] = React.useState(false);
  const [spellIsLoading, setSpellIsLoading] = React.useState(false);
  // return output obj
  const [outTarget, setOutTarget] = React.useState(["", "Welcome to DM Tool, a friendly quick reference for DMs and Players alike!", ""]);

  function toTop() {
    window.scrollTo(0,0);
  }

  // Special toggle function for finding non general item, spells
  function toggleSpellNav (id, name, level) {
    // IIV Fetch for getting single spell by id
    if (level !== undefined) {
      (async () => {
        setIsLoading(true);
        const response = await fetch(`https://dnd-rolling-chart-api.herokuapp.com/api/spells/spellById/${id}`);
        const jsonData = await response.json()
        .then(setIsLoading(false));

        setSubNavNames([]);
        setSpellInfo(jsonData.spell);

        console.log('Spell Info', jsonData.spell);
      })();
    // IIV Fetch for getting spells by level
    } else {
      (async () => {
        setSpellIsLoading(true);
        const level = name[3];
        const response = await fetch(`https://dnd-rolling-chart-api.herokuapp.com/api/spells/spellsByLevel/${level}`);
        const jsonData = await response.json()
        .then(setSpellIsLoading(false));

        setSubNavNames(jsonData.spells);

        // console.log("toggleSpellNav -- find spells by level", jsonData['spells'])
      })();
    }
  }


  // Sets Sub Header Buttons and rolls random numbers for content
  function toggleNewNav(id, name, objName, childContent) {
    console.log("ID: ", id, " Name: ", name, " Obj Name: ", objName, " Child Content: ", childContent);

    // Rolls number for Dice (tables with random_roll_only: true)
    if (childContent) {
      setOutTarget([Math.floor(Math.random()*name + 1), "", name]);
    // Gets Sub Header Child Content
    } else {
      (async () => {
        try {
          setGeneralContentIsLoading(true);
          const response = await fetch(`https://dnd-rolling-chart-api.herokuapp.com/api/button/sub/viewAll/children/${id}`);
          const jsonData = await response.json()
          .then(setGeneralContentIsLoading(false));

          const rollContent = jsonData.button;
          const index = Math.floor(Math.random()*rollContent.length + 1);

          setOutTarget([index, rollContent[index].value, ""]);

          // console.log("toggleNewNav", jsonData['content'])
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }

  // ------------------------------------DOM return
  return (
    <main>

      {/* Header */}
      <Header
        setOutTarget={setOutTarget}
        setSpellInfo={setSpellInfo}
        setSubNavNames={setSubNavNames}
        subNavNames={subNavNames}
        toggleNewNav={toggleNewNav}
        toggleSpellNav={toggleSpellNav}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />

      {/* Output for Spells */}
      <SpellsContainer
        spellInfo={spellInfo}
        spellIsLoading={spellIsLoading}
      />

      {/* Output for rolls and general content */}
       <GeneralOutput
          outTarget={outTarget}
       />

      <footer className="mb-5"></footer>
    </main>
  )
}

export default App;
