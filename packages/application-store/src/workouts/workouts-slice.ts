import { createSlice } from '@reduxjs/toolkit';
import { Exercise, Workout } from '@liftograph/types-common';

interface AddWorkoutAction {
    /** Workout to add to state. */
    payload: Workout;
}

interface AddExerciseToWorkoutAction {
    payload: {
        /**
         * Workout ID associated with the workout we want to add an exercise to.
         */
        parentWorkoutId: string;
        /** Exercise we want to add to state. */
        exercise: Exercise;
    }
}

interface RemoveExerciseFromWorkout {
    payload: {
        /**
         * Workout ID associated with the workout we want to add an exercise to.
         */
        parentWorkoutId: string;
        /** Index of exercise to be deleted. */
        exerciseIndex: number;
    }
}

const workoutsSlice = createSlice({
    name: 'workouts',
    initialState: [] as Workout[],
    reducers: {
        addWorkout(state, action: AddWorkoutAction) {
            state.push(action.payload);
        },
        addExerciseToWorkout(state, action: AddExerciseToWorkoutAction) {
            const { parentWorkoutId, exercise } = action.payload;
            const workout = state.find(({ id }) => id === parentWorkoutId);

            if (!workout) {
                // TODO handle case where parentWorkoutId does not exist in
                // state.
                return;
            }

            workout.exercises.push(exercise);
        },
        removeExerciseFromWorkout(state, action: RemoveExerciseFromWorkout) {
            const { parentWorkoutId, exerciseIndex } = action.payload;
            const workout = state.find(({ id }) => id === parentWorkoutId);

            if (!workout) {
                // TODO handle case where parentWorkoutId does not exist in
                // state.
                return;
            }

            workout.exercises.splice(exerciseIndex, 1);
        }
    }
});

export const {
    addWorkout,
    addExerciseToWorkout,
    removeExerciseFromWorkout
} = workoutsSlice.actions;
export default workoutsSlice.reducer;
