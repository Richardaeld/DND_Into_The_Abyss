// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
// import React from 'react';

// html content
import NavButton from "./components/html/buttons/NavButton";
import SpellButton from './components/html/buttons/SpellButton'
import SuccessNewButton from './components/html/buttons/SuccessNewButton'
import OutContainer from './components/html/OutContainer';

import Header from './components/html/semantic/Header'
import HeaderNavButtons from './components/html/semantic/header/HeaderNavButtons'
// import toggleSpellNav from './components/async/toggleSpellNav';


function App() {

// ---------------------------------------------------------------- Fetches ----------------------------------------------------------------

  // // Sets Header (Main) Nav buttons
  // const ListNavs = async () => {
  //   try {
  //     const response = await fetch("https://dnd-rolling-chart-api.herokuapp.com/api/button/main/viewAll");
  //     const jsonData = await response.json()

  //     setNavNames(jsonData['buttons']);

  //     console.log("Header (main) nav buttons", jsonData['buttons'])
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // useEffect(() => {
  //   ListNavs();
  // }, []);

  // ------------------------------------Active elements

  // const [navNames, setNavNames] = React.useState([])
  const [spellInfo, setSpellInfo] = React.useState([])
  // content obj

  // return output obj
  const [outTarget, setOutTarget] = React.useState(["", "Welcome to DM Tool, a friendly quick reference for DMs and Players alike!"])


  function toTop() {
    window.scrollTo(0,0)
  }

  // // Toggle visibility of sub nav buttons
  // function toggleNav(id, targetId) {


  //   // Reveal nav button content
  //   setNavNames(prevNavNames => {
  //     // remove any existing printout content
  //     setOutTarget(["", ""])
  //     setSpellInfo([])

  //     return prevNavNames.map((navName) => {
  //       console.log(navName.id, "test")
  //       if (navName.id === id) {
  //         // Fetch Sub Header Buttons
  //         const getSubNav = async () => {
  //           try{
  //             console.log(navName.id, "DBhit")

  //             const response =await fetch(`https://dnd-rolling-chart-api.herokuapp.com/api/button/main/viewAll/children/${navName.id}`)
  //             const jsonData = await response.json()

  //             setSubNavNames(jsonData['button'])

  //             console.log(jsonData['button'], "IM SUB HEADER JSON DATA")
  //           } catch (err) {
  //             console.error(err)
  //           }
  //         }
  //           getSubNav();
  //         return {...navName, open: !navName.open}
  //       } else {
  //         return {...navName, open: false}
  //       }


  //     })
  //   })
  // }

  // ------------------------------------Creates multiple iterations from single components
  // const navElements = navNames.map(navName => (
  //   <NavButton
  //     key={navName.id}
  //     name={navName.name}
  //     open={navName.open}
  //     target={navName.target}
  //     toggleNav={() => toggleNav(navName.id, navName.target)}
  //   />
  // ))

  // Special toggle function for finding non general item, spells
  function toggleSpellNav (id, name, level) {
    // IIV Fetch for getting single spell by id
    if (level !== undefined) {
      (async () => {
        const response = await fetch(`https://dnd-rolling-chart-api.herokuapp.com/api/spells/spellById/${id}`)
        const jsonData = await response.json();

        setSubNavNames([])
        setSpellInfo(jsonData['spell'])

        console.log(jsonData['spell'])
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

  const [subNavNames, setSubNavNames] = React.useState([])
  // const subNavElements = subNavNames.map(button => (
  //   <SuccessNewButton
  //     key={button.name}
  //     name={button.name}
  //     obj_name={button.obj_name}
  //     child_table={button.child_table}
  //     open={button.true}
  //     click={() => toggleNewNav(button.id, button.name, button.obj_name, button.random_roll_only)}
  //     clickSpells={() => toggleSpellNav(button.id, button.name, button.level)}
  //   />
  // ))



const spellInfoElement = spellInfo.map((info) => (
  <SpellButton
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

  // ------------------------------------DOM return
  return (
    <main>

    {/* <Header /> */}

      {/* <header className="container-fluid" >
        <div className="row justify-content-center">
          <div className="col-11 mt-5">
            <div className="row justify-content-center"> */}
              <HeaderNavButtons 
                setOutTarget={setOutTarget}
                setSpellInfo={setSpellInfo}
                setSubNavNames={setSubNavNames}
                subNavNames={subNavNames}
                toggleNewNav={toggleNewNav}
                toggleSpellNav={toggleSpellNav}
              />
                {/* {navElements} */}
            {/* </div>
          </div>

          {subNavElements.length !== 0 &&
            <div className="col-11 mt-5 mx-2 py-4 index-background">
              {subNavElements}
            </div>
          }
        </div>
      </header> */}


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

      {!spellInfoElement.length !== 0 &&
        <section className="container-fluid mt-5" id="spell-description">
              {spellInfoElement}
        </section>
      }

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
