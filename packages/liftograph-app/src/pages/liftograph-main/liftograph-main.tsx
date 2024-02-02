import { Box } from '@mui/material';
import React, { useState } from 'react';
import { NavigationMenu } from './components/NavigationMenu';
import { ApplicationContent } from './components/ApplicationContent';
import { ApplicationId } from './ApplicationId';

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
                    id={ApplicationId.Workouts}
                    selectedApplication={currentApplicationId}
                >
                    ToDo: Implement workouts sub-application
                </ApplicationContent>
                <ApplicationContent
                    id={ApplicationId.Calendar}
                    selectedApplication={currentApplicationId}
                >
                    ToDo: Implement calendar sub-application
                </ApplicationContent>
            </Box>
        </Box>
    );
}
