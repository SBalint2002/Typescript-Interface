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

let sportok2: Result[] = [];
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

document.addEventListener("DOMContentLoaded", () =>{
    //jobbra-balra ugrál ha nincs kitöltve
    document.getElementById('focisubmit')?.addEventListener("mouseover", () =>{
        if((document.getElementById('footballwinner') as HTMLInputElement).value == "" || 
        (document.getElementById('footballdate') as HTMLInputElement).value == "" ||
        parseInt((document.getElementById('elso') as HTMLInputElement).value) == NaN || 
        parseInt((document.getElementById('masodik') as HTMLInputElement).value) == NaN){
            if(document.getElementById('focisubmit')?.classList.contains('jobb')){
                (document.getElementById("focisubmit") as HTMLInputElement).classList.remove("jobb");
            }else (document.getElementById("focisubmit") as HTMLInputElement).classList.add("jobb");
        }
    });
    document.getElementById('marathonsubmit')?.addEventListener("mouseover", () =>{
        if((document.getElementById('marathonwinner') as HTMLInputElement).value == "" || 
        (document.getElementById('marathondate') as HTMLInputElement).value == "" ||
        parseInt((document.getElementById('ido') as HTMLInputElement).value) == NaN){
            if(document.getElementById('marathonsubmit')?.classList.contains('jobb')){
                (document.getElementById("marathonsubmit") as HTMLInputElement).classList.remove("jobb");
            }else (document.getElementById("marathonsubmit") as HTMLInputElement).classList.add("jobb");
        }
    });
    document.getElementById('calvinsubmit')?.addEventListener("mouseover", () =>{
        if((document.getElementById('calinballwinner') as HTMLInputElement).value == "" || 
        (document.getElementById('calvinballdate') as HTMLInputElement).value == ""){
            if(document.getElementById('calvinsubmit')?.classList.contains('jobb')){
                (document.getElementById("calvinsubmit") as HTMLInputElement).classList.remove("jobb");
            }else (document.getElementById("calvinsubmit") as HTMLInputElement).classList.add("jobb");
        }
    });





    document.getElementById('focisubmit')?.addEventListener('click', () =>{
        sportok2.push(new Football(
            (document.getElementById('footballwinner') as HTMLInputElement).value, 
            new Date((document.getElementById('footballdate') as HTMLInputElement).value), 
            parseInt((document.getElementById('elso') as HTMLInputElement).value), 
            parseInt((document.getElementById('masodik') as HTMLInputElement).value)));
        console.log(sportok2[sportok2.length-1].toString());
    });
    document.getElementById('marathonsubmit')?.addEventListener('click', () =>{
        sportok2.push(new Marathon(
            (document.getElementById('marathonwinner') as HTMLInputElement).value, 
            new Date((document.getElementById('marathondate') as HTMLInputElement).value), 
            parseInt((document.getElementById('ido') as HTMLInputElement).value)))
        console.log(sportok2[sportok2.length-1].toString());
    });
    document.getElementById('calvinsubmit')?.addEventListener('click', () =>{
        sportok2.push(new Calvinball(
            (document.getElementById('marathonwinner') as HTMLInputElement).value, 
            new Date((document.getElementById('marathondate') as HTMLInputElement).value)))
        console.log(sportok2[sportok2.length-1].toString());
    });
});