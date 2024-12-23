"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GolfCoach_1 = require("./GolfCoach");
var CricketCoach_1 = require("./CricketCoach");
var myCoaches = [];
var myGolfCoach = new GolfCoach_1.GolfCoach();
var myCricketCoach = new CricketCoach_1.CricketCoach();
myCoaches.push(myGolfCoach);
myCoaches.push(myCricketCoach);
for (var _i = 0, myCoaches_1 = myCoaches; _i < myCoaches_1.length; _i++) {
    var coach = myCoaches_1[_i];
    console.log(coach.getDailyWorkout());
    console.log();
}
/* console.log(myGolfCoach.getDailyWorkout());
console.log(myCricketCoach.getDailyWorkout()); */ 
