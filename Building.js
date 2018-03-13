class Building {
    constructor(name, id, tooltip, unlocked = false, unlockResourceAmount = new Cost(), baseCost, costMultiplier, type, effect) {
        this.name = name;
        this.id = id;
        this.tooltip = tooltip;
        this.unlocked = unlocked;
        this.unlockResourceAmount = unlockResourceAmount;
        this.baseCost = baseCost;
        this.costMultiplier = costMultiplier;
        this.cost = Object.assign({}, baseCost);
        this.type = type;
        this.effect = effect;

        this.amount = 0;

        this.canBuyColor = "";
        this.canNotBuyColor = "";

        
    }
    
    info() {
        console.log(this.name);
        console.log(this.tooltip);
        console.log(this.baseCost);
        console.log(this.type);
        console.log(this.effect);
        console.log(this.cost);
        console.log(this.amount);
    }

    buy() {
        if (this.canBuy(this.cost)) {
            for (const resource in this.cost) {
                console.log("resource: " + resource);
                if (Resources.hasOwnProperty(resource)) {
                    Resources[resource].add(-this.cost[resource]);
                    console.log("resource: " + resource);
                }
            }
            this.add();

        } else {
            console.log("You can not afford");
        }
    }

    canBuy(cost) {
        for (const resource in cost) {
            if (Resources.hasOwnProperty(resource)) {
                if (Resources[resource].amount - cost[resource] < 0) {
                    return false;
                }
            }
        }
        return true;
    }

    add() {
        this.amount++;
        this.updateAmountText();
        this.updateCost();
    }

    updateAllText() {
        this.updateAmountText();
    }

    updateAmountText() {
        if (this.amount > 0) {
            this.setText(this.id, this.name + " (" + this.amount + ")");
        } else {
            this.setText(this.id, this.name);
        }
    }

    setText(id, text) {
        document.getElementById(id).innerHTML = text;
    }

    style(id) {
        return document.getElementById(id).style;
    }

    updateCost() {
        for (const resource in this.cost) {
            this.cost[resource] = this.baseCost[resource] * Math.pow(this.costMultiplier, this.amount);
        }
    }

    unlockCheck() {
        if (!this.unlocked) {
            if (this.canBuy(this.unlockResourceAmount)) {
                this.style(this.id).display = "inline";
                this.unlocked = true;
            } else {
                this.style(this.id).display = "none";
            }
        }
    }

    canBuyVisuals() {
        if (this.unlocked) {
            if (this.canBuy(this.cost)) {
                this.style(this.id).backgroundColor = "green";
            } 
            else {
                this.style(this.id).backgroundColor = "red";
            }
        }
    }
}