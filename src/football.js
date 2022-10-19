"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Football = void 0;
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
exports.Football = Football;
