import { Result } from "./results";

export class Calvinball implements Result {
    #winner: string = '';
    date: Date;
    points: number;

    constructor(winner:string, date: Date){
        this.winner = winner;
        this.date = date;
        this.points = Math.floor(Math.random() * 100) + 10
    }

    set winner(winner:string){
        if(winner == "Calvin" || winner == "Hobbes"){
            this.#winner = winner;
        }
    }

    get winner() {
        return this.#winner;
    }

    result(): void {
        console.log(this.toString());
    }

    toString(): string {
        return "Calvinball: " + this.points + " points";
    }
}