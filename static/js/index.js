// Nav bar -- Makes content visible and invisible
var findNav = document.querySelectorAll(".nav-icon");
findNav.forEach(navEnable);
function navEnable(item, index) {
    item.addEventListener("click", function() {
        
        //clsoes all previously open sections
        let closeAllOpen = document.querySelectorAll(".activeItem");
        closeAllOpen.forEach(closeAllOpenSelect);
        function closeAllOpenSelect(item){
            item.classList.add("make-invis")
        }
        
        // opens section up
        let navLoc = item.getElementsByTagName("span")[0].textContent;
        if (document.getElementById(navLoc).classList.contains("make-invis") == true){
            document.getElementById(navLoc).classList.remove("make-invis");
        } else{
            document.getElementById(navLoc).classList.add("make-invis"); // doesnt work
        }
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
            for(i=0; i<allSpells.length-1; i++){
                if (allSpells[i].level == sometext){
                    createSubData(allSpells[i].name, i)
                }
            }
        }else{
            document.getElementById("consoleOutput").textContent = diceRoll + 1
        }
    })

}

function removecreateSubData() {
    let removelength = document.getElementById("outputListInformation").children.length
    // console.log(removelength)
    for(i=0; i<removelength-1; i++){
        document.getElementById("outputListInformation").lastChild.remove()
    }
}

function createSubData(spellName, indexNumber) {
    let createDivCol = document.createElement("div");
    createDivCol.className = "col-2 nav-icon outputListItems"
    let createDivRow = document.createElement("div");
    createDivRow.className = "row no-gutters"
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
        // make key array
        let findKeys = Object.keys(allSpells[indexNumber])
        key = []
        for(i=0; i < findKeys.length-1; i++){
            key.push(findKeys[i])
        }
        for(i=0; i < findKeys.length-1; i++){
            tempId = "spellInfo" + key[i]
            document.getElementById(tempId).getElementsByTagName("h1")[0].textContent = key[i]
            document.getElementById(tempId).getElementsByTagName("h1")[1].textContent = allSpells[indexNumber][key[i]]

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