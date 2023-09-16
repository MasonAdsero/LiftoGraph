import React from "react";
import { Workout } from "./model";

export default interface LiftographApplicationState {
    workouts: Workout[];
    dispatchApplicationStateAction: React.Dispatch<LiftographApplicationStateAction>;
}

export type LiftographApplicationStateAction = any;
