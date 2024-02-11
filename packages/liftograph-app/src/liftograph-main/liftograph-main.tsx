import { Box } from '@mui/material';
import React, { useState } from 'react';
import { NavigationMenu } from './components/navigation-menu';
import { ApplicationContent } from './components/application-context';
import { ApplicationId } from './application-id';
import { Workouts } from './workouts/workouts';

export const WORKOUT_EDITOR_LINK_DATA_TESTID = 'workout-editor-link';
export const TAB_DATA_TESTID = 'liftograph-tab-';

export function LiftographMain() {
    const [
        currentApplicationId,
        setApplicationId
    ] = useState(ApplicationId.Workouts);

    return (
        <Box sx={{ display: 'flex' }}>
            <NavigationMenu
                onClick={setApplicationId}
                currentApplicationId={currentApplicationId}
            />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <ApplicationContent
                    visible={currentApplicationId === ApplicationId.Workouts}
                >
                    <Workouts />
                </ApplicationContent>
                <ApplicationContent
                    visible={currentApplicationId === ApplicationId.Calendar}
                >
                    ToDo: Implement calendar sub-application
                </ApplicationContent>
            </Box>
        </Box>
    );
}