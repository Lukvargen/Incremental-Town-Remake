let tickRate = 0.1; // s

let Resources = {
    wood: new Resource("Trä", "wood", 100, 1000),
    stone: new Resource("Sten", "stone", 100, 100),
}

let Buildings = {
    house: new Building("Hus", "house","Fint Trähus med sten grund.", true, new Cost(), new Cost(-10,0), 2, "Population", 2),
    test: new Building("test", "test","Fint Trähus med sten grund.", false, new Cost(150, 0), new Cost(10,0), 2, "Population", 2),
}

// Onload
window.onload = function() {

    // update all text
    updateAllText();
    updateBuildings();

    


    let lastUpdate = Date.now()
    // start update loop
    setInterval(function () {
        // Calculate delta
        let currentUpdate = Date.now();
        let deltaTime = (currentUpdate - lastUpdate) / 1000
        lastUpdate = currentUpdate;
        update(deltaTime);
    }, 1000 * tickRate);
}


// Update Loop
function update(delta) {
    // All building functions that need too be updated every update
    updateBuildings();

}

function clickBuilding(building) {
    Buildings[building].buy();
}

function updateAllText() {
    updateAllBuildingsText();
    updateAllResourcesText();
}

function updateAllBuildingsText() {
    for (const building in Buildings) {
        Buildings[building].updateAllText();
    }
}

function updateAllResourcesText() {
    for (const resource in Resources) {
        Resources[resource].updateAllText();
    }
}

// Alla functioner här körs varje Update
function updateBuildings() {
    for (const building in Buildings) {
        Buildings[building].unlockCheck();
        Buildings[building].canBuyVisuals();
    }
}

