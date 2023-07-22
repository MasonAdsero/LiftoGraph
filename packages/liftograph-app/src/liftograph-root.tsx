import React from 'react';
import { IconButton, Toolbar as BaseToolbar, Typography, AppBar, CssBaseline, Box } from '@mui/material';
import { Home } from '@mui/icons-material';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { LiftographMain } from './pages/liftograph-main';
import WorkoutEditorRoot from '@liftograph/workout-editor-ui';

export const DATA_TESTID = 'liftograph-application-root';

const ROOT_PATH = '/';

/** Entry point to the Liftograph application */
export function LiftographRoot() {
    return (
        <Box data-testid={DATA_TESTID} sx={{border: '4px solid red'}}>
            <CssBaseline />
            <AppBar position='sticky'>
                <Toolbar />
            </AppBar>
            <Routes>
                <Route path={ROOT_PATH} element={<LiftographMain />} />
                <Route path='workout-editor' element={<WorkoutEditorRoot />} />
            </Routes>
        </Box>
    );
}

function Toolbar() {
    const { pathname } = useLocation();

    return (
        <BaseToolbar
            sx={{
                border: '1px solid blue'
            }}
        >
            <Typography variant='h4'>Liftograph</Typography>
            { (pathname !== ROOT_PATH) ? (<HomeButton />) : null }
        </BaseToolbar>
    );
}

export const HOME_BUTTON_DATA_TESTID = 'liftograph-application-home-button';

function HomeButton() {
    const changePageTo = useNavigate();
    return (
        <IconButton
            data-testid={HOME_BUTTON_DATA_TESTID}
            aria-label='home'
            sx={{
                marginLeft: 'auto'
            }}
            onClick={() => {
                changePageTo('/');
            }}
        >
            <Home />
        </IconButton>
    );
}
