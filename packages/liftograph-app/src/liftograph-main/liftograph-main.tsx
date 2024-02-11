import { Box } from '@mui/material';
import { CalendarMonth, FitnessCenter } from '@mui/icons-material';
import React, { useState } from 'react';
import { MenuSchema, NavigationMenu } from './components/navigation-menu';
import { ApplicationContent } from './components/application-context';
import { ApplicationId } from './application-id';
import { Workouts } from './workouts/workouts';

export const WORKOUT_EDITOR_LINK_DATA_TESTID = 'workout-editor-link';
export const TAB_DATA_TESTID = 'liftograph-tab-';

const MENU_DATA: MenuSchema<ApplicationId>[] = [
    {
        id: ApplicationId.Workouts,
        label: 'Workouts',
        Icon: FitnessCenter
    },
    {
        id: ApplicationId.Calendar,
        label: 'Calendar',
        Icon: CalendarMonth
    }
];

export function LiftographMain() {
    const [
        currentApplicationId,
        setApplicationId
    ] = useState(ApplicationId.Workouts);

    return (
        <Box sx={{ display: 'flex' }}>
            <NavigationMenu
                onClick={setApplicationId}
                selectedMenuItem={currentApplicationId}
                menuData={MENU_DATA}
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
