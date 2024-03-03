import { addWorkout, getWorkoutsSelector, useStoreDispatch, useStoreSelection } from '@liftograph/application-store';
import { Link } from 'react-router-dom';
import { Box, Button, Divider, IconButton, ListItem, ListItemText, Modal, Paper, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import { v4 } from 'uuid';
import { BottomToolbar } from '../components/bottom-toolbar';

export const WORKOUT_EDITOR_LINK_DATA_TESTID = 'workout-editor-link';

export function Workouts() {
    const workouts = useStoreSelection(getWorkoutsSelector);
    const [ isModalOpen, openModal ] = useState(false);

    return (
        <Box>
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
            <BottomToolbar>
                <IconButton
                    onClick={() => openModal(true)}
                >
                    <AddIcon />    
                </IconButton>
            </BottomToolbar>
            <CreateWorkoutModal
                isOpen={isModalOpen}
                close={() => handleModalClose()}
            />
        </Box>
    );

    function handleModalClose() {
        openModal(false);
    }
}

interface CreateWorkoutModalProps {
    isOpen: boolean;
    close(): void;
}

function CreateWorkoutModal(props: CreateWorkoutModalProps) {
    const { isOpen, close } = props;
    const dispatch = useStoreDispatch();
    const [ name, setName ] = useState('');
    const [ hasValidName, setHasValidName ] = useState(false);

    return (
        <Modal
            open={isOpen}
            onClose={cancel}
        >
            <Paper
                elevation={3}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '10px'
                }}
            >
                <Typography variant='h6'>Create a workout!</Typography>
                <Divider />
                <TextField
                    required
                    error={!hasValidName}
                    defaultValue={name}
                    label='Name'
                    helperText={!hasValidName ? 'Please enter a name' : undefined}
                    variant='outlined'
                    sx={{
                        marginTop: '15px'
                    }}
                    onChange={(event) => {
                        const {
                            target: {
                                value
                            }
                        } = event;
                        setName(value);
                    }}
                    onBlur={() => {
                        if (isValidName()) {
                            setHasValidName(true);
                        } else {
                            setHasValidName(false);
                        }
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '15px'
                    }}
                >
                    <Button
                        variant='outlined'
                        sx={{
                            width: '50%',
                            marginRight: '5px'
                        }}
                        onClick={() => cancel()}
                    >
                        Cancel
                    </Button>
                    <Button
                        disabled={!hasValidName}
                        variant='contained'
                        sx={{
                            width: '50%'
                        }}
                        onClick={() => save()}
                    >
                        Save
                    </Button>
                </Box>
            </Paper>
        </Modal>
    );

    function cancel() {
        resetName();
        close();
    }

    function save() {
        if (isValidName()) {
            dispatch(
                addWorkout({
                    name,
                    id: v4(),
                    exercises: []
                })
            );
            resetName();
            close();
        }
    }

    function resetName() {
        setName('');
        setHasValidName(false);
    }

    function isValidName() {
        const trimmedName = name.trim();
        if (trimmedName === '') {
            return false;
        }
        return true;
    }
}
