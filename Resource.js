class Resource {
    constructor(name, id, amount, maxAmount) {
        this.name = name;
        this.id = id;
        this.amount = amount;
        this.maxAmount = maxAmount;

        this.perSec = 0;
        
    }

    add(value) {
        this.amount += value;
        if (this.amount > this.maxAmount) {
            this.amount = this.maxAmount;
        } else if (this.amount < 0) {
            this.amount = 0;
        }
        this.updateAmount();
    }

    updateAllText() {
        this.updateName();
        this.updateAmount();
        this.updateMaxAmount();
        this.updatePerSec();
    }


    updateName() {
        this.setText(this.id + "Name", this.name);
    }

    updateAmount() {
        this.setText(this.id + "Amount", this.amount);
    }

    updateMaxAmount() {
        this.setText(this.id + "MaxAmount", this.maxAmount);
    }

    updatePerSec() {
        this.setText(this.id + "PerSec", this.perSec);
    }

    setText(id, text) {
        if (document.getElementById(id) != null) {
            document.getElementById(id).innerHTML = text;
        } else {
            console.log("ID: " + id + " Finns inte");
        }
    }
}