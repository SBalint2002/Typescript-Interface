"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marathon = void 0;
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
exports.Marathon = Marathon;
