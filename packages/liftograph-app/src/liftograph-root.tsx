import React from 'react';
import { IconButton, Toolbar as BaseToolbar, Typography, AppBar, CssBaseline, Box } from '@mui/material';
import { Home } from '@mui/icons-material';

export const DATA_TESTID = 'liftograph-application-root';

/** Entry point to the Liftograph application */
export function LiftographRoot() {
    return (
        <Box data-testid={DATA_TESTID} sx={{border: '4px solid red'}}>
            <CssBaseline />
            <AppBar position='sticky'>
                <Toolbar />
            </AppBar>
            <p>hi</p>
        </Box>
    );
}

function Toolbar() {
    return (
        <BaseToolbar sx={
            {
                border: '1px solid blue'
            }
        }>
            <IconButton 
                aria-label='home'
                sx={{
                    marginLeft: 0,
                    marginRight: 5
                }}
            >
                <Home />
            </IconButton>
            <Typography variant='h4'>Liftograph</Typography>
        </BaseToolbar>
    );
}
