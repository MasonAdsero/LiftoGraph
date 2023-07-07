type Workout = Exercise[];

type Exercise = TimeExercise | RepetitionExercise;

interface TimeExercise {
    name : string;
    form? : string;
    sets : number;
    duration : number;
}

interface RepetitionExercise {
    name : string;
    form? : string;
    sets : number;
    repetitions : number;
}