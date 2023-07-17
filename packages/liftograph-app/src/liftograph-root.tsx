import React from 'react';
import { IconButton, Toolbar as BaseToolbar, Typography, AppBar, CssBaseline, Box } from '@mui/material';
import { Home } from '@mui/icons-material';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { LiftographMain } from './pages/liftograph-main';
import WorkoutEditorRoot from '@liftograph/workout-editor-ui';

export const DATA_TESTID = 'liftograph-application-root';

/** Entry point to the Liftograph application */
export function LiftographRoot() {
    return (
        <BrowserRouter>
            <Box data-testid={DATA_TESTID} sx={{border: '4px solid red'}}>
                <CssBaseline />
                <AppBar position='sticky'>
                    <Toolbar />
                </AppBar>
                <Routes>
                    <Route path='/' element={<LiftographMain />} />
                    <Route path='workout-editor' element={<WorkoutEditorRoot />} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

function Toolbar() {
    const changePageTo = useNavigate();
    return (
        <BaseToolbar
            sx={{
                border: '1px solid blue'
            }}
        >
            <Typography variant='h4'>Liftograph</Typography>
            {/*Todo: Home icon button should only show if app not main */}
            <IconButton 
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
        </BaseToolbar>
    );
}
