import { Result } from "./results";

export class Football implements Result {
    winner: string;
    date: Date;
    elso: number;
    masodik: number;

    constructor(winner:string, date: Date, elso: number, masodik:number){
        this.winner = winner;
        this.date = date;
        this.elso = elso;
        this.masodik = masodik;
    }

    result(): void {
        console.log(this.toString());
    }

    toString(): string {
        return "Football match: " + this.elso + "-" + this.masodik;
    }

}