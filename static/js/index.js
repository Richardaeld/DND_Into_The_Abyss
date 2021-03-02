// Nav bar -- Makes content visible and invisible
var findNav = document.querySelectorAll(".nav-icon");
findNav.forEach(navEnable);
function navEnable(item, index) {
    item.addEventListener("click", function() {
        var navLoc = item.textContent.trim();
        if (document.getElementById(navLoc).classList.contains("make-invis") == true){
            document.getElementById(navLoc).classList.remove("make-invis");
        } else{
            document.getElementById(navLoc).classList.add("make-invis");
        }
    })
}

// Rolls a random dice by taking in the d# and rolling specific number
var findDice = document.querySelectorAll(".dice");
findDice.forEach(rollDice);
function rollDice(item, index){
    item.addEventListener("click", function() {
        let diceRoll = ((item.id).split("d"))[1];
        diceRoll = Math.floor(Math.random()*diceRoll);
        document.getElementsByClassName("outPut")[0].textContent = "You rolled a " + (diceRoll + 1);
    });
}

// rolls for narrow miss to publish
var narrowMissFind = document.querySelectorAll(".narrowMissSelect");
narrowMissFind.forEach(rollNarrowMiss);
function rollNarrowMiss(item, index) {
    item.addEventListener("click", function() {
        var missType = item.id;
        var rollEvent = (Math.floor(Math.random()*50)) + 1;
        if (missType == "melee"){
            document.getElementById("consoleOutput").textContent = melee[rollEvent];
        }
        if (missType == "range"){
            document.getElementById("consoleOutput").textContent = range[rollEvent];
        }
        if (missType == "spell"){
            document.getElementById("consoleOutput").textContent = spell[rollEvent];
        }
    })
}

var wildMagicFind = document.querySelectorAll(".wildMagicSelect");
wildMagicFind.forEach(rollWildMagic);
function rollWildMagic(item) {
        item.addEventListener("click", function() {

        var magicType = item.id;
        console.log(magicType)
        if (magicType == "wildMagicNonRaw") {
            let rollEvent = (Math.floor(Math.random()*100)) + 1;
            document.getElementById("consoleOutput").textContent = wildMagicNonRaw[rollEvent]
        }
        if (magicType == "wildMagicRaw") {
            let rollEvent = (Math.floor(Math.random()*50)) + 1;
            document.getElementById("consoleOutput").textContent = wildMagicRaw[rollEvent]
        }
    })
}

// rolls for magic items to publish
var magicItemFind = document.querySelectorAll(".magicItemsSelect");
magicItemFind.forEach(rollMagicItem);
function rollMagicItem(item, index) {
    item.addEventListener("click", function() {
        var missType = item.id;
        var rollEvent = (Math.floor(Math.random()*100)) + 1;
        console.log(missType)
        if (missType == "tableA"){
            document.getElementById("consoleOutput").textContent = tableA[rollEvent];
        }

    })
}