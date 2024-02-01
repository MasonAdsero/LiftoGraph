import { ApplicationState } from '../store';

export const getWorkoutsSelector = (state: ApplicationState) => state.workouts;
export const getWorkoutById = (state: ApplicationState, workoutId:string) => {
    const workout = state.workouts.find(({ id }) => id === workoutId);
    if(!workout) return state.workouts[0]
    return workout;
};
