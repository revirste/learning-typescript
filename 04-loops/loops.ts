
for (let i: number = 0; i < 5; ++i) {
    console.log(`Iteration ${i}`);
}


let grades: number[] = [99.0, 89.0, 91.0, 81.0, 100.0];
let gradesSum: number = 0.0;
for (let i: number = 0; i < grades.length; ++i) {
    console.log(`Grade ${i + 1}: ${grades[i]}`);
    gradesSum += grades[i];
}

let gradesAverage: number = (gradesSum / grades.length);
console.log(`The class grade average is: ${gradesAverage}`);


let names: string[] = ["Nick", "Elliott", "Alyssa", "Jax", "Jeffrey"];
for (let name of names) {
    
    if (name == "Nick") {
        console.log(`Hi ${name}, how was your studying today?`);
    }
    else if (name == "Elliott") {
        console.log(`Hi ${name}, go read a book stinky!!!`);
    }
    else  {
        console.log(`Sorry ${name}, I don't have a custom message for you. Too bad!`)
    }

}