import React from 'react';
import { Paper } from '@mui/material';

export interface BottomToolbarProps {
    children: React.ReactNode;
}

/** Toolbar fixed to the bottom of the screen. */
export function BottomToolbar(props: BottomToolbarProps) {
    const { children } = props;
    return (
        <Paper
            elevation={3}
            sx={{
                position: 'fixed',
                bottom: '15px'
            }}
        >
            {children}
        </Paper>
    );
}
