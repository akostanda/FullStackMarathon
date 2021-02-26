let bill = {name: "Bill"};
let john = {name: "John"};
let pete = {name: "Pete"};
let mary = {name: "Mary"};
let mikhael = {name: "Mikhael"};

console.log("guestList:");
let guestList = new WeakSet();
guestList.add(bill).add(john).add(pete).add(mary).add(mikhael);
console.log("bill must be true - " + guestList.has(bill));
console.log("john must be true - " + guestList.has(john));
console.log("pete must be true - " + guestList.has(pete));
console.log("mary must be true - " + guestList.has(mary));
console.log("mikhael must be true - " + guestList.has(mikhael));
guestList.delete(pete)
console.log("pete must be false after delete - " + guestList.has(pete));


console.log("menue:");
let menue = new Map();
menue.set("meat", 10).set("fish", 12).set("potatoes", 6).set("crabs", 15).set("octopus", 13);
console.log("All 5 dishes:");
for (let dishe of menue) {
    console.log(dishe);
}
console.log("size must be 5 - " + menue.size);
console.log("meat must be 10 - " + menue.get("meat"));
console.log("fish must be 12 - " + menue.get("fish"));
console.log("potatoes must be 6 - " + menue.get("potatoes"));
console.log("crabs must be true - " + menue.has("crabs"));
menue.delete("crabs");
console.log("All dishes after crabs deleting crabs:");
for (let dishe of menue) {
    console.log(dishe);
}


console.log("bankVault:");
let bankVault = new WeakMap();
bankVault.set(bill, "bankaccount: 1000$").set(john, "bankaccount: 5000$").set(pete, "bankaccount: 800$")
    .set(mary, "bankaccount: 20000$").set(mikhael, "bankaccount: 11000$");
console.log("bill must be true - " + bankVault.has(bill));
console.log("bill has 1000$ on account - " + bankVault.get(bill));
console.log("pete has 800$ on account -  - " + bankVault.has(pete));
console.log("mikhael must be true - " + bankVault.has(mikhael));
bankVault.delete(mary)
console.log("mary must be false after delete - " + bankVault.has(mary));

console.log("coinCollection:");
let coinCollection = new Set();
coinCollection.add("10 drachmas").add("2 dollars").add("100 hryvnia").add("20 euros").add("5 pounds");
console.log("All coins in set:");
for (let coin of coinCollection) {
    console.log(coin);
}
console.log("10 drachmas must be true - " + coinCollection.has("10 drachmas"));
console.log("2 dollars must be true - " + coinCollection.has("2 dollars"));
console.log("100 hryvnia must be true - " + coinCollection.has("100 hryvnia"));
console.log("20 euros must be true - " + coinCollection.has("5 pounds"));
console.log("5 pounds must be true - " + coinCollection.has("5 pounds"));
coinCollection.delete("100 hryvnia")
console.log("100 hryvnia must be false after delete - " + coinCollection.has("100 hryvnia"));