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
let sportok2 = [];
/*
console.log("\nKiírás:\n");
for(let sport of sportok){
    sport.result();
}

for(let sport of sportok) {
    if(sport.winner == "Calvin"){
        sport.result();
    }
}
console.log("\nRendezett tömb:\n");
sportok.sort((a, b) => a.date.getTime() - b.date.getTime());
for(let sport of sportok){
    sport.result();
} */
document.addEventListener("DOMContentLoaded", () => {
    var _a, _b, _c, _d, _e, _f;
    //jobbra-balra ugrál ha nincs kitöltve
    (_a = document.getElementById('focisubmit')) === null || _a === void 0 ? void 0 : _a.addEventListener("mouseover", () => {
        var _a;
        if (document.getElementById('footballwinner').value == "" ||
            document.getElementById('footballdate').value == "" ||
            parseInt(document.getElementById('elso').value) == NaN ||
            parseInt(document.getElementById('masodik').value) == NaN) {
            if ((_a = document.getElementById('focisubmit')) === null || _a === void 0 ? void 0 : _a.classList.contains('jobb')) {
                document.getElementById("focisubmit").classList.remove("jobb");
            }
            else
                document.getElementById("focisubmit").classList.add("jobb");
        }
    });
    (_b = document.getElementById('marathonsubmit')) === null || _b === void 0 ? void 0 : _b.addEventListener("mouseover", () => {
        var _a;
        if (document.getElementById('marathonwinner').value == "" ||
            document.getElementById('marathondate').value == "" ||
            parseInt(document.getElementById('ido').value) == NaN) {
            if ((_a = document.getElementById('marathonsubmit')) === null || _a === void 0 ? void 0 : _a.classList.contains('jobb')) {
                document.getElementById("marathonsubmit").classList.remove("jobb");
            }
            else
                document.getElementById("marathonsubmit").classList.add("jobb");
        }
    });
    (_c = document.getElementById('calvinsubmit')) === null || _c === void 0 ? void 0 : _c.addEventListener("mouseover", () => {
        var _a;
        if (document.getElementById('calinballwinner').value == "" ||
            document.getElementById('calvinballdate').value == "") {
            if ((_a = document.getElementById('calvinsubmit')) === null || _a === void 0 ? void 0 : _a.classList.contains('jobb')) {
                document.getElementById("calvinsubmit").classList.remove("jobb");
            }
            else
                document.getElementById("calvinsubmit").classList.add("jobb");
        }
    });
    (_d = document.getElementById('focisubmit')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
        sportok2.push(new football_1.Football(document.getElementById('footballwinner').value, new Date(document.getElementById('footballdate').value), parseInt(document.getElementById('elso').value), parseInt(document.getElementById('masodik').value)));
        console.log(sportok2[sportok2.length - 1].toString());
    });
    (_e = document.getElementById('marathonsubmit')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => {
        sportok2.push(new marathon_1.Marathon(document.getElementById('marathonwinner').value, new Date(document.getElementById('marathondate').value), parseInt(document.getElementById('ido').value)));
        console.log(sportok2[sportok2.length - 1].toString());
    });
    (_f = document.getElementById('calvinsubmit')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', () => {
        sportok2.push(new calvinball_1.Calvinball(document.getElementById('marathonwinner').value, new Date(document.getElementById('marathondate').value)));
        console.log(sportok2[sportok2.length - 1].toString());
    });
});
