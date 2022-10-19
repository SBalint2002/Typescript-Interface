"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Calvinball_winner;
class Football {
    constructor(winner, date, elso, masodik) {
        this.winner = winner;
        this.date = date;
        this.elso = elso;
        this.masodik = masodik;
    }
    result() {
        console.log(this.toString());
    }
    toString() {
        return "Football match: " + this.elso + "-" + this.masodik;
    }
}
class Marathon {
    constructor(winner, date, ido) {
        this.winner = winner;
        this.date = date;
        this.ido = ido;
    }
    result() {
        console.log(this.toString());
    }
    toString() {
        let perc = Math.floor(this.ido / 60);
        let maradek = this.ido % 60;
        return "Marathon: " + perc + " min " + maradek + " s";
    }
}
class Calvinball {
    constructor(winner, date) {
        _Calvinball_winner.set(this, '');
        this.winner = winner;
        this.date = date;
        this.points = Math.floor(Math.random() * 100) + 10;
    }
    set winner(winner) {
        if (winner == "Calvin" || winner == "Hobbes") {
            __classPrivateFieldSet(this, _Calvinball_winner, winner, "f");
        }
    }
    get winner() {
        return __classPrivateFieldGet(this, _Calvinball_winner, "f");
    }
    result() {
        console.log(this.toString());
    }
    toString() {
        return "Calvinball: " + this.points + " points";
    }
}
_Calvinball_winner = new WeakMap();
let sportok = [
    new Football("Reálmadrid", new Date(2022, 10, 19), 6, 3),
    new Football("Barsszelóna", new Date(2011, 9, 16), 3, 1),
    new Marathon("Dzsémszbond", new Date(2101, 12, 23), 564),
    new Marathon('Juszéjnbolt', new Date(2134, 3, 23), 211),
    new Calvinball('Calvin', new Date(2001, 12, 29)),
    new Calvinball('Hobbes', new Date(2134, 3, 4)),
    new Calvinball('Kelvin', new Date(1999, 9, 9)),
];
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
