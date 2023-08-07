import React, {useState} from 'react';
import {  TextField, Box, List, ListItem, ListItemButton, ListItemText, Button, IconButton, Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import  type {Workout, Exercise} from "../../types-common/dist/model.d.ts";

const test: Workout = [];
const testExercise: Exercise = {
    name: "Sussy",
    form: "sussier",
    sets: 5,
    repetitions: 20
}
const testExerciseTwo: Exercise = {
    name: "Riley",
    sets: 2,
    duration: 30
}

test.push(testExercise, testExerciseTwo);

function DeleteDialog(){
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseDelete = () => {
        //TODO: Change to remove in accordance with backend rather than test list
        //The next line needs the index
        test.splice(0,1);
        setOpen(false);
    }

    return (
        <div>
            <IconButton edge='end' aria-label='delete' onClick={handleClickOpen}>
                <DeleteIcon/>
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

function AddExercise(){
    const [addExercise, setAdd] = useState(false);
    const [exerciseName, setName] = useState('');
    const [exerciseForm, setForm] = useState('');
    const [exerciseSets, setSet] = useState(0);
    const [exerciseReps, setRep] = useState(0);

    const AddToList = () => {
        //TODO: Change to add exercise to the apps list rather than test list
        test.push({name: exerciseName, form: exerciseForm, sets: exerciseSets, repetitions: exerciseReps});
        setAdd(!addExercise);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            {!addExercise ? <Button sx={{marginLeft: 'auto'}} variant='outlined' startIcon={<AddIcon/>} onClick={()=> setAdd(!addExercise)}>
                Add
            </Button> : (
            <>
                <Button sx={{marginLeft: 'auto'}} variant='outlined' startIcon={<CloseIcon/>} onClick={()=> setAdd(!addExercise)}>Cancel</Button>
                <Box component='form' sx={{flex: 1, display: 'flex', flexDirection: 'column',width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: '15px', paddingTop: '10px'}}>
                    <TextField fullWidth id='exercise-name' label='name' variant='standard' value={exerciseName} onChange={(e) => setName(e.target.value)}/>
                    <TextField fullWidth id='exercise-form' label='form' variant='standard' value={exerciseForm} onChange={(e) => setForm(e.target.value)}/>
                    <TextField fullWidth id='exercise-sets' inputProps={{min:0}} label='sets' type='number'  variant='standard' value={exerciseSets} onChange={(e) => setSet(parseInt(e.target.value))}/>
                    <TextField fullWidth id='exercise-reps' inputProps={{min:0}} label='repetitions' type='number' variant='standard' value={exerciseReps} onChange={(e) => setRep(parseInt(e.target.value))}/>
                </Box>
                <Button sx={{marginLeft: 'auto'}} variant='outlined' onClick={() => AddToList}>Confirm</Button>
            </>
            )
            }
        </div>
    )
}

export function ExerciseList(){
        return (
            <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', alignItems: 'center', marginTop: '8px'}}>
                <AddExercise/>
                <div>
                    <List>
                        {test.map((item, index) => (
                        <ListItem key={index} secondaryAction={
                                    <DeleteDialog/>
                                }>
                            <ListItemButton>
                                <ListItemText primary={item.name}/>
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                </div>
            </Box>
        );
}