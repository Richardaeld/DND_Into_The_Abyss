
var findDice = document.querySelectorAll(".dice");
findDice.forEach(rollDice);
function rollDice(item, index){
    item.addEventListener("click", function() {
        let diceRoll = ((item.id).split("d"))[1]
        diceRoll = Math.floor(Math.random()*diceRoll);
        document.getElementsByClassName("outPut")[0].textContent = "You rolled a " + (diceRoll + 1);
    });

}

var narrowMissFind = document.querySelectorAll(".narrowMissSelect");
narrowMissFind.forEach(rollNarrowMiss)
function rollNarrowMiss(item, index) {
    item.addEventListener("click", function() {
        var missType = item.id
        var rollEvent = (Math.floor(Math.random()*50)) + 1;
        if (missType == "melee"){
            document.getElementById("NarrowMiss").textContent = melee[rollEvent]
        }
        if (missType == "range"){
            document.getElementById("NarrowMiss").textContent = range[rollEvent]
        }
        if (missType == "spell"){
            document.getElementById("NarrowMiss").textContent = spell[rollEvent]
        }

    })
}

