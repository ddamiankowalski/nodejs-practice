class PizzaShop {
    #name;
    #orderNumber;

    constructor(name) {
        this.#name = name;
        this.#orderNumber = 0;
    }

    order() {
        this.#orderNumber++;
    }

    displayOrderNum() {
        console.log(this.#orderNumber);
    }
}

module.exports = PizzaShop;