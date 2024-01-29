export type Workout = {
    id: string;
    name: string;
    exercises: Exercise[]
};

export type Exercise = TimeExercise | RepetitionExercise;

export interface ExerciseCommon {
    name: string;
    form?: string;
    sets: number;
}
export interface TimeExercise extends ExerciseCommon{
    duration: number;
}

export interface RepetitionExercise extends ExerciseCommon {
    repetitions: number;
}