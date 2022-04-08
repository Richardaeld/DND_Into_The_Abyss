// Nav bar -- Makes content visible and invisible
var findNav = document.querySelectorAll(".nav-icon");
findNav.forEach(navEnable);
function navEnable(item, index) {
    item.addEventListener("click", function() {
        //closes all previously open sections
        let closeAllOpen = document.querySelectorAll(".activeItem");
        closeAllOpen.forEach(closeAllOpenSelect);
        function closeAllOpenSelect(item){
            item.classList.add("make-invis")
            document.getElementById("spellInfo").classList.add("make-invis") //removes spell sheet
        }
        
        // opens section up
        let navLoc = item.getElementsByTagName("span")[0].textContent;
        if (document.getElementById(navLoc).classList.contains("make-invis") == true){
            document.getElementById(navLoc).classList.remove("make-invis");
        } else{
            document.getElementById(navLoc).classList.add("make-invis"); // doesnt work
        }
        
        // document.getElementById("outputListInformation").classList.add("make-invis") //removes spells list
    })
}

// Builds objects to call from
function createObject(data){ // previously melee, range, etc...
    this.melee = melee;
    this.range = range;
    this.spell = spell;
    this.wildMagicNonRaw = wildMagicNonRaw
    this.wildMagicRaw = wildMagicRaw;    
    this.magicItemTableA = magicItemTableA;
}

// Creates new objects to take in string as variable
let object = new createObject(melee, range, spell, wildMagicNonRaw, wildMagicRaw, magicItemTableA);
//object = new createObject(melee, range, spell);

// Allows objects to be created and called as a randomly rolled item
var itemFind = document.querySelectorAll(".subactiveItem")
itemFind.forEach(itemSelect)
function itemSelect(item, index){
    functionName = item.id
    item.addEventListener("click", function(functionName) {
        // Find appropiate number to random roll and creates random number
        let diceRoll = item.id.indexOf("dice")
        diceRoll = item.id.slice(diceRoll+4, )
        diceRoll = Math.floor(Math.random()*diceRoll)
        //looks for object to use or just gives random numbers
        if(item.getElementsByTagName("h1")[1]){
            let objectName = item.getElementsByTagName("h1")[1].textContent;
            let data = object[objectName];
            console.log(data)
            objectName = data[diceRoll + 1]
            document.getElementById("consoleOutput").textContent = (diceRoll + 1) + " - " + objectName
        } else if(item.getElementsByTagName("span")[0]){ // for JSON spells.js
        //    console.log(item.getElementsByTagName("span")[0].textContent)
            sometext = item.getElementsByTagName("span")[1].textContent
            console.log(sometext)
            removecreateSubData()
            numberSpells = 0
            document.getElementById("outputListInformation").parentElement.parentElement.classList.remove("make-invis")  //reveals list area -----------
            for(i=0; i<allSpells.length; i++){
                if (allSpells[i].level == sometext){
                    createSubData(allSpells[i].name, i)
                    numberSpells++
                }
                document.getElementById("consoleOutput").textContent = numberSpells + " spells"
            }
        }else{ // for dice normal rolls
            document.getElementById("consoleOutput").textContent = "You Rolled: " + (diceRoll + 1)
        }
    })

}

function removecreateSubData() {
    let removelength = document.getElementById("outputListInformation").children.length
    // console.log(removelength)
    for(i=0; i<removelength; i++){
        document.getElementById("outputListInformation").lastChild.remove()
    }
}

function createSubData(spellName, indexNumber) {
    let createDivCol = document.createElement("div");
    createDivCol.className = "col-2 nav-icon outputListItems"
    let createDivRow = document.createElement("div");
    createDivRow.className = "row no-gutters justify-content-center align-items-center spell-bubble"
    let createSpan = document.createElement("span");
    createSpan.textContent = spellName
    createSpan.className = ""

    var addLocation = document.getElementById("outputListInformation")
    addLocation.appendChild(createDivCol)
    let = innerLocation = addLocation.getElementsByTagName("div").length
    addLocation.getElementsByTagName("div")[innerLocation-1].appendChild(createDivRow)
    addLocation.getElementsByTagName("div")[innerLocation].appendChild(createSpan)

    let countItems = document.querySelectorAll(".outputListItems").length
    functionName = "outputListItems" + countItems
    document.getElementsByClassName("outputListItems")[countItems-1].addEventListener("click", function(functionName) {
        document.getElementById("spellInfo").classList.remove("make-invis")
        // make key array
        let findKeys = Object.keys(allSpells[indexNumber])
        key = []
        for(i=0; i < findKeys.length; i++){
            key.push(findKeys[i])
        }
        // console.log(key)
        for(i=0; i < findKeys.length; i++){
            tempId = "spellInfo" + key[i]
            // document.getElementById(tempId).getElementsByTagName("h1")[0].textContent = key[i]
            if(key[i] == "tags" || key[i] == "classes"){ // puts lists into string form
                let tempList = []
                tempList = allSpells[indexNumber][key[i]]
                let tempString = ""
                for(let z=0; z<tempList.length; z++){
                    tempString += tempList[z] + " "
                }
                document.getElementById(tempId).getElementsByTagName("span")[0].textContent = tempString
                
            }else if(key[i] == "higher_levels"){
                document.getElementById(tempId).getElementsByTagName("span")[0].textContent = allSpells[indexNumber][key[i]]

            }else if(key[i] == "level") {

            }else if(key[i] == "components") {
                // Removes Previous P elements
                let PreviousP = document.getElementById(tempId).getElementsByTagName("span")[0].getElementsByTagName("p")
                if(PreviousP.length > 0){
                    while(0 < PreviousP.length){
                        PreviousP[0].remove()
                    }
                }
                //finds keys of component section
                let findComponents = Object.keys(allSpells[indexNumber][key[i]])
                console.log(findComponents)
                let tempString = ""
                // Creates a string to add to as component section
                for(z=0; z<findComponents.length; z++){
                    let createP = document.createElement("p");
                    createP.textContent = findComponents[z] + " : " + allSpells[indexNumber][key[i]][findComponents[z]]
                    createP.classList = "col-6"
                    //            tempString += findComponents[z] + " : " + allSpells[indexNumber][key[i]][findComponents[z]]
                    
                    if(findComponents[z] == "material"){ // skip material

                    }else if(findComponents[z] == "raw"){ // skip raw 

                    }else if(findComponents[z] == "materials_needed"){ // expand upon material needed section
                        console.log(allSpells[indexNumber][key[i]][findComponents[z]][0])
                        for(x=0; x< allSpells[indexNumber][key[i]][findComponents[z]].length; x++) {
                            createP.textContent = findComponents[z] + " : " + allSpells[indexNumber][key[i]][findComponents[z]][x]
                            createP.classList = "col-12"
                            // tempString += allSpells[indexNumber][key[i]][findComponents[z]][x]
                            document.getElementById(tempId).getElementsByTagName("span")[0].appendChild(createP)
                        }
                    } else {
                        document.getElementById(tempId).getElementsByTagName("span")[0].appendChild(createP)
                    }
                }

                // carrageReplace = /[/r]/g
                // tempString = tempString.replace(carrageReplace, '/r')
        //        document.getElementById(tempId).getElementsByTagName("span")[0].textContent = tempString
            }else{
                document.getElementById(tempId).getElementsByTagName("span")[0].textContent = allSpells[indexNumber][key[i]]
            }

        }
        // console.log(allSpells[indexNumber][keytest])
        // document.getElementById("consoleOutput").textContent = allSpells[indexNumber]
        // console.log(allSpells[indexNumber])
        // console.log(Object.keys(allSpells[indexNumber]))
        // console.log()
    })
}

// function createData(data, itemdata) {

//     var previousBoxes = document.querySelectorAll(".outputListItems").length
//     if (previousBoxes > 0){
//         console.log("I triggerI triggerI triggerI triggerI triggerI triggerI triggerI triggerI triggerI triggerI triggerI trigger")
//         for(i=0; i < previousBoxes.length-1; i++){
//             document.getElementsByClassName("outputListItems")[i].removeEventListener("click");
//             document.getElementsByClassName("outputListItems")[i].remove();
//         }
//     }

//     let createDivCol = document.createElement("div");
//     createDivCol.className = "col-2 nav-icon outputListItems"
//     let createDivRow = document.createElement("div");
//     createDivRow.className = "row no-gutters"
//     let createSpan = document.createElement("span");
//     createSpan.textContent = data
//     createSpan.className = ""

//     var addLocation = document.getElementById("outputList")
//     addLocation.appendChild(createDivCol)
//     let = innerLocation = addLocation.getElementsByTagName("div").length
//     addLocation.getElementsByTagName("div")[innerLocation-1].appendChild(createDivRow)
//     addLocation.getElementsByTagName("div")[innerLocation].appendChild(createSpan)

//     var listItemsFind = document.querySelectorAll(".outputListItems")
//     listItemsFind.forEach(listItemsSelect)
//     function listItemsSelect (item, index) {
//         let sometest = allSpells[itemdata]
//         sometest = Object.keys(sometest)
//         console.log(sometest.length)
//         item.addEventListener("click", function (subClicker) {
//             for(i=0; i < sometest.length-1; i++){
//             //    var temp = toString(sometest[i])
//                 console.log(temp)
//                 console.log(allSpells[itemdata].temp)
//                 // createSubData(allSpells[itemdata].sometest[i])

//             }
//             //console.log(allSpells[itemdata].keys())

//             // var sometest = allSpells[300]
//             // var sometestKeys = Object.keys(sometest)
//             // console.log(Object.keys(sometest))
//             // console.log(sometestKeys[1])

//         })
//     }
// }

// var allSpellLevels = ["cantrip", "1", "2", "3", "4", "5", "6", "7", "8"]

//     // rolls for magic items to publish
// var magicSpellsFind = document.querySelectorAll(".magicSpellsSelect");
// magicSpellsFind.forEach(magicSpellsSelect);
// function magicSpellsSelect(item, index) {
//     item.addEventListener("click", function() {
//          var missType = item.id;
//          var rollEvent = (Math.floor(Math.random()*100)) + 1;
//         console.log(missType)

//             for(i=0; i<allSpells.length-1 ; i++){
//                 if(allSpells[i].level == item.id){
//                     createData(allSpells[i].name, i)
//                     // console.log(allSpells[i].name)
//                 }
//             }
            
 
//     })
// }

// //var sometest = JSON.stringify(allSpells[300])
// var sometest = allSpells[300]
// var sometestKeys = Object.keys(sometest)
// console.log(Object.keys(sometest))
// console.log(sometestKeys[1])