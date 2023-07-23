import React from 'react';
import {  Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
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
                <List>
                    {test.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemButton>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary={item.name}/>
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Box>
        );
}