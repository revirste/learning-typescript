import { Coach } from "./Coach";
import { GolfCoach } from "./GolfCoach";
import { CricketCoach } from "./CricketCoach";

let myCoaches: Coach[] = [];

let myGolfCoach: GolfCoach = new GolfCoach();
let myCricketCoach: CricketCoach = new CricketCoach();

myCoaches.push(myGolfCoach);
myCoaches.push(myCricketCoach);

for (let coach of myCoaches) {
    console.log(coach.getDailyWorkout());
}

/*
console.log(myGolfCoach.getDailyWorkout());
console.log(myCricketCoach.getDailyWorkout());
*/