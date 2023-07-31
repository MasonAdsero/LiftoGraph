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
        return (
            <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', alignItems: 'center', marginTop: '8px'}}>
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                    {!addExercise ? <Button sx={{marginLeft: 'auto'}} variant='outlined' startIcon={<AddIcon/>} onClick={()=> setAdd(!addExercise)}>
                        Add
                    </Button> : (
                    <>
                        <Button sx={{marginLeft: 'auto'}} variant='outlined' startIcon={<CloseIcon/>} onClick={()=> setAdd(!addExercise)}>Cancel</Button>
                        <Box component='form' sx={{flex: 1, display: 'flex', flexDirection: 'column',width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: '15px', paddingTop: '10px'}}>
                            <TextField fullWidth id='exercise-name' label='name' variant='standard'/>
                            <TextField fullWidth id='exercise-name' label='sets' variant='standard'/>
                            <TextField fullWidth id='exercise-name' label='repetitions' variant='standard'/>
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