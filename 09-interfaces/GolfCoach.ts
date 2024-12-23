import { Coach } from "./Coach";

export class GolfCoach implements Coach {

    public getDailyWorkout(): string {
        return `Your daily workout is three sets of deltoid lateral raises.`
    }
}