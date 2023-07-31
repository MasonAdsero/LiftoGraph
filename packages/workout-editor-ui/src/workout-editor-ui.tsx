import React, {useState} from 'react';
import {  TextField, Box, List, ListItem, ListItemButton, ListItemText, Button, IconButton } from '@mui/material';
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



export function ExerciseList(){
        const [addExercise, setAdd] = useState(false);
        const [exerciseName, setName] = useState('');
        const [exerciseForm, setForm] = useState('');
        const [exerciseSets, setSet] = useState('');
        const [exerciseReps, setRep] = useState('');

        return (
            <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', alignItems: 'center', marginTop: '8px'}}>
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                    {!addExercise ? <Button sx={{marginLeft: 'auto'}} variant='outlined' startIcon={<AddIcon/>} onClick={()=> setAdd(!addExercise)}>
                        Add
                    </Button> : (
                    <>
                        <Button sx={{marginLeft: 'auto'}} variant='outlined' startIcon={<CloseIcon/>} onClick={()=> setAdd(!addExercise)}>Cancel</Button>
                        <Box component='form' sx={{flex: 1, display: 'flex', flexDirection: 'column',width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: '15px', paddingTop: '10px'}}>
                            <TextField fullWidth id='exercise-name' label='name' variant='standard' value={exerciseName} onChange={(e) => setName(e.target.value)}/>
                            <TextField fullWidth id='exercise-form' label='form' variant='standard' value={exerciseForm} onChange={(e) => setForm(e.target.value)}/>
                            <TextField fullWidth id='exercise-sets' inputProps={{min:0}} label='sets' type='number'  variant='standard' value={exerciseSets} onChange={(e) => setSet(e.target.value)}/>
                            <TextField fullWidth id='exercise-reps' inputProps={{min:0}} label='repetitions' type='number' variant='standard' value={exerciseReps} onChange={(e) => setRep(e.target.value)}/>
                        </Box>
                        <Button sx={{marginLeft: 'auto'}} variant='outlined' onClick={()=> setAdd(!addExercise)}>Confirm</Button>
                    </>)
                    }
                </div>
                <div>
                    <List>
                        {test.map((item, index) => (
                        <ListItem key={index} secondaryAction={
                                <IconButton edge='end' aria-kabel='delete'>
                                    <DeleteIcon/>
                                </IconButton>
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