import { Calvinball } from "./calvinball";
import { Football } from "./football";
import { Marathon } from "./marathon";
import { Result } from "./results";

let sportok: Result[] = [
    new Football("Reálmadrid", new Date(2022, 10, 19), 6, 3),
    new Football("Barsszelóna", new Date(2011, 9, 16), 3, 1),
    new Football("Calvin", new Date(2012, 9, 16), 5, 1),
    new Marathon("Dzsémszbond", new Date(2101, 12, 23), 564),
    new Marathon("Dzsémszbond", new Date(2101, 12, 23), 564),
    new Marathon('Calvin', new Date(2134, 3, 23), 211),
    new Calvinball('Calvin', new Date(2001, 12, 29)),
    new Calvinball('Hobbes', new Date(2134, 3, 4)),
    new Calvinball('Kelvin', new Date(1999, 9, 9)),
];

console.log("\nKiírás:\n");

/* for(let sport of sportok){
    sport.result();
} */

for(let sport of sportok) {
    if(sport.winner == "Calvin"){
        sport.result();
    }
}

console.log("\nRendezett tömb:\n");

sportok.sort((a, b) => a.date.getTime() - b.date.getTime());

for(let sport of sportok){
    sport.result();
}

document.addEventListener("DOMContentLoaded", () =>{
    
});