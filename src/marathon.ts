import { Result } from "./results";

export class Marathon implements Result {
    winner: string;
    date: Date;
    ido: number;

    constructor(winner:string, date: Date, ido: number){
        this.winner = winner;
        this.date = date;
        this.ido = ido;
    }

    result(): void {
        console.log(this.toString());
    }

    toString(): string {
        let perc = Math.floor(this.ido / 60);
        let maradek = this.ido % 60;
        return "Marathon: " + perc + " min " + maradek + " s";
    }

}