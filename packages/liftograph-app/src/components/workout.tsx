import { addWorkout, getWorkoutsSelector, useStoreDispatch, useStoreSelection } from '@liftograph/application-store';
import { Link } from 'react-router-dom';
import { Box, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { Button } from '@mui/base';
import { v4 } from 'uuid';

export const WORKOUT_EDITOR_LINK_DATA_TESTID = 'workout-editor-link';

export function WorkoutDisplay() {
    const workouts = useStoreSelection(getWorkoutsSelector);
    const dispatch = useStoreDispatch();
    return (
        <Box>
            <Button
                onClick={() => {
                    const name = prompt('Name your workout') ?? 'test';
                    dispatch(
                        addWorkout({
                            name,
                            id: v4(),
                            exercises: []
                        })
                    );
                }}
            >
            Add Workout
            </Button>
            {workouts.map((workout, id) => (
            <ListItem key={id}>
                <Link
                    data-testid={WORKOUT_EDITOR_LINK_DATA_TESTID}
                    to='workout-editor'
                    state={{workoutId: workout.id}}
                >
                    <ListItemText primary={workout.name}/>
                </Link>
            </ListItem>
            ))}
        </Box>
    );
}