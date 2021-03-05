let EatException = require('./Eat-exception');

class Ingestion {
    products = [];
    product = {};

    constructor(mealType, day_of_diet) {
        this.mealType = mealType;
        this.day_of_diet = day_of_diet;
    }

    getFromFridge(productName) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name === productName) {
                try {
                    if (this.products[i].isJunkFood()) {
                        throw new EatException;
                    }
                    break;
                } catch (e) {
                    e.message = `To many calories in ${productName} for ${this.mealType}`;
                    throw e;
                }
            }
        }
    }

    getProductInfo(productName) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name === productName) {
                this.product.kcal = this.products[i].kcal_per_portion;
                return this.product;
            }
        }
    }

    setProduct(product) {
        this.products.push(product);
    }
}

module.exports = {Ingestion};