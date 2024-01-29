import { ApplicationState } from '../store';

export const getWorkoutsSelector = (state: ApplicationState) => state.workouts;
