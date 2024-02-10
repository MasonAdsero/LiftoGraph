import { store, useStoreDispatch, useStoreSelection } from './store';

import { addWorkout, addExerciseToWorkout, removeExerciseFromWorkout } from './workouts/workouts-slice';
import { getWorkoutsSelector, getWorkoutById } from './workouts/get-workouts-selector';

export {
    store,
    useStoreDispatch,
    useStoreSelection,
    addWorkout,
    addExerciseToWorkout,
    removeExerciseFromWorkout,
    getWorkoutsSelector,
    getWorkoutById
};
