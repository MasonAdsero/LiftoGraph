import { Box } from '@mui/material';
import React, { useState } from 'react';
import { NavigationMenu } from './components/navigation-menu';
import { ApplicationContent } from './components/application-context';
import { ApplicationId } from './application-id';
import { Workouts } from './applications/components/workouts';

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
                    <Workouts />
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
