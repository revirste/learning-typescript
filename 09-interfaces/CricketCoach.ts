import { Coach } from "./Coach";

export class CricketCoach implements Coach {

    public getDailyWorkout(): string {
        return `Your daily workout is to do 30 minutes of CrossFit`;
    }

}