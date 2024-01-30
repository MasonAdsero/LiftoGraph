import { Exercise, Workout } from '@liftograph/types-common';
import reducer, { addExerciseToWorkout, addWorkout, removeExerciseFromWorkout } from '../../../src/workouts/workouts-slice';

describe(addWorkout.name, () => {
    it('should add a workout to the state', () => {
        runAddWorkoutTest([]);
    });
    
    it('should add exercise to state and not modify existing state', () => {
        const currentState = [{ name: 'mock existing workout'}] as Workout[];
        runAddWorkoutTest(currentState);
    });

    function runAddWorkoutTest(currentState: Workout[]) {
        const newWorkout = { name: 'mock new workout' } as Workout;
        const actualValue = reducer(currentState, addWorkout(newWorkout))
        expect(actualValue).toEqual([...currentState, newWorkout]);
    }
});

describe(addExerciseToWorkout.name, () => {
    const MOCK_PARENT_WORKOUT_ID = 'mock-workout-id-1';
    let currentState: Workout[];

    beforeEach(() => {
        currentState = [
            {
                name: 'mock workout name',
                id: MOCK_PARENT_WORKOUT_ID,
                exercises: []
            }
        ];
    });

    it('should add exercise to correct workout', () => {
        runAddExerciseToWorkoutTest(currentState);
    });

    it('should not modify existing execises', () => {
        currentState[0].exercises.push(
            {
                name: 'mock existing exercise'
            } as Exercise
        );
        runAddExerciseToWorkoutTest(currentState);
    });

    function runAddExerciseToWorkoutTest(state: Workout[]) {
        const newExercise = { name: 'mock exercise' } as Exercise;
        const actualValue = reducer(state, addExerciseToWorkout({
            parentWorkoutId: MOCK_PARENT_WORKOUT_ID,
            exercise: newExercise
        }));
        expect(actualValue).toEqual([
            {
                ...currentState[0],
                exercises: [
                    ...currentState[0].exercises,
                    newExercise
                ]
            }
        ]);
    }
});

describe(removeExerciseFromWorkout.name, () => {
    const MOCK_PARENT_WORKOUT_ID = 'mock-workout-id-1';
    let currentState: Workout[];

    beforeEach(() => {
        currentState = [
            {
                name: 'mock workout name',
                id: MOCK_PARENT_WORKOUT_ID,
                exercises: [
                    {
                        name: 'mock existing exercise'
                    } as Exercise
                ]
            }
        ];
    });

    it('should remove exercise from state', () => {
        runRemoveExerciseToWorkoutTest(currentState, 0, []);
    });

    it('should remove exercise and not modify other exercises', () => {
        const exercise = {
            name: 'another mock existing exercise'
        } as Exercise;
        currentState[0].exercises.push(exercise);
        runRemoveExerciseToWorkoutTest(currentState, 0, [exercise]);
    });

    function runRemoveExerciseToWorkoutTest(
        state: Workout[],
        index: number,
        expectedExercises: Exercise[]
    ) {
        const actualValue = reducer(state, removeExerciseFromWorkout({
            parentWorkoutId: MOCK_PARENT_WORKOUT_ID,
            exerciseIndex: index
        }));
        expect(actualValue).toEqual([
            {
                ...currentState[0],
                exercises: expectedExercises
            }
        ]);
    }
});
