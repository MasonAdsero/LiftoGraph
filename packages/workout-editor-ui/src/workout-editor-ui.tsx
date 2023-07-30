import React from 'react';
import {  Box, List, ListItem, ListItemButton, ListItemText, Button, IconButton } from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
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
        return (
            <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button sx={{marginLeft: 'auto'}} variant='outlined' startIcon={<AddIcon/>}>
                        Add
                    </Button>
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