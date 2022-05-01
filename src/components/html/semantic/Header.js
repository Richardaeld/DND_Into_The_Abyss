// import React from "react";

// export default function Header () {




//     // Special toggle function for finding non general item, spells
//     function toggleSpellNav (id, name, level) {
//         // IIV Fetch for getting single spell by id
//         if (level !== undefined) {
//           (async () => {
//             const response = await fetch(`https://dnd-rolling-chart-api.herokuapp.com/api/spells/spellById/${id}`)
//             const jsonData = await response.json();
    
//             setSubNavNames([])
//             setSpellInfo(jsonData['spell'])
    
//             console.log(jsonData['spell'])
//           })();
//         // IIV Fetch for getting spells by level
//         } else {
//           (async () => {
//             const level = name[3]
//             const response = await fetch(`https://dnd-rolling-chart-api.herokuapp.com/api/spells/spellsByLevel/${level}`)
//             const jsonData = await response.json();
    
//             setSubNavNames(jsonData['spells'])
    
//             // console.log("toggleSpellNav -- find spells by level", jsonData['spells'])
//           })();
//         }
//       }

//     const navElements = navNames.map(navName => (
//         <NavButton
//           key={navName.id}
//           name={navName.name}
//           open={navName.open}
//           target={navName.target}
//           toggleNav={() => toggleNav(navName.id, navName.target)}
//         />
//       ))

//       const subNavElements = subNavNames.map(button => (
//         <SuccessNewButton
//           key={button.name}
//           name={button.name}
//           obj_name={button.obj_name}
//           child_table={button.child_table}
//           open={button.true}
//           click={() => toggleNewNav(button.id, button.name, button.obj_name, button.random_roll_only)}
//           clickSpells={() => toggleSpellNav(button.id, button.name, button.level)}
//         />
//       ))

//     return (

//         <header className="container-fluid" >
//             <div className="row justify-content-center">
//             <div className="col-11 mt-5">
//                 <div className="row justify-content-center">
//                     {navElements}
//                 </div>
//             </div>

//             {subNavElements.length !== 0 &&
//                 <div className="col-11 mt-5 mx-2 py-4 index-background">
//                 {subNavElements}
//                 </div>
//             }
//             </div>
//         </header>

//         )
// }