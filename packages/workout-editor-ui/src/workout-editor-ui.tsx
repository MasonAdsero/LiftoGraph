import React, {useState} from 'react';
import { TextField, Box, List, ListItem, ListItemButton, ListItemText, Button, IconButton, Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { addExerciseToWorkout, getWorkoutById, removeExerciseFromWorkout, useStoreDispatch, useStoreSelection } from '@liftograph/application-store';
import {useLocation} from "react-router-dom";
interface DeleteDialogProps{
    /** Index of exercise in exercises[]. */
    index: number;

    /** ID associated with exercise's parent workout. */
    parentWorkoutId: string;
}

function DeleteDialog(props: DeleteDialogProps){
    const { index, parentWorkoutId } = props;

    const [open, setOpen] = useState(false);
    const dispatch = useStoreDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseDelete = () => {
        dispatch(
            removeExerciseFromWorkout({
                parentWorkoutId,
                exerciseIndex: index
            })
        );
        setOpen(false);
    }

    return (
        <div>
            <IconButton edge='end' aria-label='delete' onClick={handleClickOpen}>
                <DeleteIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="delete-prompt" aria-describedby="delete-text">
                <DialogTitle id="delete-prompt">
                    {"Delete this exercise from the workout?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="delete-text">
                        Remove this exercise from the workout permanently.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCloseDelete} autoFocus>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

interface AddExerciseProps {
    /** ID of parent workout associated with an exercise. */
    parentWorkoutId: string;
}

function AddExercise(props: AddExerciseProps){
    const { parentWorkoutId } = props;

    const [addExercise, setAdd] = useState(false);
    const [exerciseName, setName] = useState('');
    const [exerciseForm, setForm] = useState('');
    const [exerciseSets, setSet] = useState(0);
    const [exerciseReps, setRep] = useState(0);
    enum ExerciseErrorsText {
        exerciseName = "Exercise must have a name",
        exerciseForm = "",
        exerciseSets = "Sets must be more than one",
        exerciseReps = "Reps must be more than one"
    }
    const [exerciseErrors, setErrors] = useState<{[key: string]: boolean}>({
        exerciseName: false,
        exerciseForm: false,
        exerciseSets: false,
        exerciseReps: false
    });
    const dispatch = useStoreDispatch();

    const AddToList = (event: React.FormEvent) => {
        //TODO: Change to add exercise to the apps list rather than test list
        event.preventDefault();
        if(validateForm()) {
            dispatch(
                addExerciseToWorkout({
                    parentWorkoutId,
                    exercise: {
                        name: exerciseName,
                        form: exerciseForm,
                        sets: exerciseSets,
                        repetitions: exerciseReps
                    }
                })
            );
            setAdd(!addExercise);
            clearForm();
        }
    };

    const validateForm = () => {
        let isValid = true;
        setErrors({});
        const errors: { [key: string]: boolean} = {};
        if(exerciseName == '')
        {
            errors["exerciseName"] = true;
            isValid = false;
        }
        if(exerciseSets < 1) {
            errors["exerciseSets"] = true;
            isValid = false;
        }
        if(exerciseReps < 1) {
            errors["exerciseReps"] = true
            isValid = false;
        }
        setErrors(errors);
        return isValid;
    }

    const clearForm = () => {
        setName('');
        setForm('');
        setSet(0);
        setRep(0);
        setAdd(!addExercise);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            {!addExercise ? <Button sx={{marginLeft: 'auto'}} variant='outlined' startIcon={<AddIcon/>} onClick={()=> setAdd(!addExercise)}>
                Add
            </Button> : (
            <>
                <Button sx={{marginLeft: 'auto'}} variant='outlined' startIcon={<CloseIcon/>} onClick={clearForm}>Cancel</Button>
                <form onSubmit={AddToList}>
                    <Box
                        component='form'
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            padding: '15px',
                            paddingTop: '10px',
                            margin: '0 auto'
                        }}>
                        <TextField
                            fullWidth
                            id='exercise-name'
                            label='name'
                            variant='standard'
                            value={exerciseName}
                            onChange={(e) => setName(e.target.value)}
                            error={exerciseErrors.exerciseName}
                            helperText={ExerciseErrorsText.exerciseName}
                        />
                        <TextField fullWidth
                            id='exercise-form'
                            label='form'
                            variant='standard'
                            value={exerciseForm}
                            onChange={(e) => setForm(e.target.value)}
                        />
                        <TextField
                            fullWidth id='exercise-sets'
                            inputProps={{min:1}}
                            label='sets'
                            type='number'
                            variant='standard'
                            value={exerciseSets}
                            onChange={(e) => setSet(parseInt(e.target.value))}
                            error={exerciseErrors.exerciseSets}
                            helperText={ExerciseErrorsText.exerciseSets}
                        />
                        <TextField
                            fullWidth
                            id='exercise-reps'
                            inputProps={{min:1}}
                            label='repetitions'
                            type='number'
                            variant='standard'
                            value={exerciseReps}
                            onChange={(e) => setRep(parseInt(e.target.value))}
                            error={exerciseErrors.exerciseReps}
                            helperText={ExerciseErrorsText.exerciseReps}
                        />
                    </Box>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <Button type='submit' sx={{marginTop: '10px', marginLeft: 'auto'}} variant='outlined'>Confirm</Button>
                    </div>
                </form>
            </>
            )
            }
        </div>
    )
}

export function ExerciseList() {
    const idState = useLocation();
    const workout = useStoreSelection(state => getWorkoutById(state, idState.state.workoutId)) ?? {
        name: 'Mock workout',
        id: 'mock id',
        exercises: [
            {
                name: "Sussy",
                form: "sussier",
                sets: 5,
                repetitions: 20
            },
            {
                name: "Riley",
                sets: 2,
                duration: 30
            }
        ],
    };
    return (
        <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', alignItems: 'center', marginTop: '8px'}}>
            <AddExercise parentWorkoutId={workout.id}/>
            <div>
                <List>
                    {workout.exercises.map((item, index) => (
                    <ListItem key={index} secondaryAction={
                                <DeleteDialog
                                    index={index}
                                    parentWorkoutId={workout.id}
                                />
                            }>
                        <ListItemButton>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </div>
        </Box>
    );
}
