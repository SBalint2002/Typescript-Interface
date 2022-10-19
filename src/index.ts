interface Result {
    winner : string;
    date : Date;

    result() : void;
    toString() : string;
}

class Football implements Result {
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

class Marathon implements Result {
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

class Calvinball implements Result {
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

let sportok: Result[] = [
    new Football("Reálmadrid", new Date(2022, 10, 19), 6, 3),
    new Football("Barsszelóna", new Date(2011, 9, 16), 3, 1),
    new Marathon("Dzsémszbond", new Date(2101, 12, 23), 564),
    new Marathon('Juszéjnbolt', new Date(2134, 3, 23), 211),
    new Calvinball('Calvin', new Date(2001, 12, 29)),
    new Calvinball('Hobbes', new Date(2134, 3, 4)),
    new Calvinball('Kelvin', new Date(1999, 9, 9)),
];

for(let sport of sportok) {
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