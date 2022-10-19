"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calvinball_1 = require("./calvinball");
const football_1 = require("./football");
const marathon_1 = require("./marathon");
let sportok = [
    new football_1.Football("Reálmadrid", new Date(2022, 10, 19), 6, 3),
    new football_1.Football("Barsszelóna", new Date(2011, 9, 16), 3, 1),
    new football_1.Football("Calvin", new Date(2012, 9, 16), 5, 1),
    new marathon_1.Marathon("Dzsémszbond", new Date(2101, 12, 23), 564),
    new marathon_1.Marathon("Dzsémszbond", new Date(2101, 12, 23), 564),
    new marathon_1.Marathon('Calvin', new Date(2134, 3, 23), 211),
    new calvinball_1.Calvinball('Calvin', new Date(2001, 12, 29)),
    new calvinball_1.Calvinball('Hobbes', new Date(2134, 3, 4)),
    new calvinball_1.Calvinball('Kelvin', new Date(1999, 9, 9)),
];
console.log("\nKiírás:\n");
/* for(let sport of sportok){
    sport.result();
} */
for (let sport of sportok) {
    if (sport.winner == "Calvin") {
        sport.result();
    }
}
console.log("\nRendezett tömb:\n");
sportok.sort((a, b) => a.date.getTime() - b.date.getTime());
for (let sport of sportok) {
    sport.result();
}
/* interface Streamelheto {
    cim: string;
    hossz: number;
} */
/* type Streamelheto ={
    cim: string;
    hossz: number;
}

type AlapTipus = number | boolean | string;

let streamelhetoTermekek: Streamelheto[] = [
    new Film('Harry Potter', 2000),
    new Zene('Sweet child of mine', 200),
    { cim: 'Thunderstruck', hossz: 198}
] */ 
