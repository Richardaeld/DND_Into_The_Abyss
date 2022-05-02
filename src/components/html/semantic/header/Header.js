import React, {useState, useEffect} from 'react';
import HeaderButton from '../../general/HeaderButton';
import SubHeaderButton from '../../general/SubHeaderButton';
// import React from "react";
export default function HeaderNavButtons(props) {

    const [navNames, setNavNames] = React.useState([]);

    // Sets Header (Main) Nav buttons
    const ListNavs = async () => {
        try {
            const response = await fetch("https://dnd-rolling-chart-api.herokuapp.com/api/button/main/viewAll");
            const jsonData = await response.json();

            setNavNames(jsonData['buttons']);

            console.log("Header (main) nav buttons", jsonData['buttons']);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        ListNavs();
    }, []);

    // Toggle visibility of sub nav buttons
    function toggleNav(id, targetId) {

        // Reveal nav button content
        setNavNames(prevNavNames => {
            // remove any existing printout content
            props.setOutTarget(["", "", ""]);
            props.setSpellInfo([]);

            return prevNavNames.map((navName) => {
                if (navName.id === id) {

                    // Fetch Sub Header Buttons
                    (async () => {
                        try{
                        // console.log(navName.id, "DB hit")

                        const response =await fetch(`https://dnd-rolling-chart-api.herokuapp.com/api/button/main/viewAll/children/${navName.id}`);
                        const jsonData = await response.json();

                        props.setSubNavNames(jsonData['button']);

                        console.log(jsonData['button'], "IM SUB HEADER JSON DATA");
                        } catch (err) {
                        console.error(err);
                        }
                    })();

                    // Ensures only a off click will remove highlight
                    if (navName.open) {
                        return {...navName};
                    } else {
                        return {...navName, open: !navName.open};
                    }

                } else {
                    return {...navName, open: false};
                }
            });
        });
    }

    const navElements = navNames.map(navName => (
        <HeaderButton
            key={navName.id}
            name={navName.name}
            open={navName.open}
            target={navName.target}
            toggleNav={() => toggleNav(navName.id, navName.target)}
        />
    ))

    const subNavElements = props.subNavNames.map(button => (
        <SubHeaderButton
            key={button.name}
            name={button.name}
            obj_name={button.obj_name}
            child_table={button.child_table}
            open={button.true}
            click={() => props.toggleNewNav(button.id, button.name, button.obj_name, button.random_roll_only)}
            clickSpells={() => props.toggleSpellNav(button.id, button.name, button.level)}
        />
    ))

    return (
        <header className="container-fluid" >
            <div className="row justify-content-center">
                <div className="col-11 mt-5">
                    <div className="row justify-content-center">
                        {navElements}
                    </div>
                </div>
            </div>

            {subNavElements.length !== 0 &&
                <div className="col-11 mt-5 mx-2 py-4 index-background">
                      {subNavElements}
                </div>
            }
      </header>
    )
}