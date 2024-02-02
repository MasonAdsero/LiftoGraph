import React from 'react';
import { ApplicationId } from '../ApplicationId';
import { Box } from '@mui/system';

export interface ApplicationContentProps {
    children: React.ReactNode;
    id: ApplicationId;
    selectedApplication: ApplicationId;
}

export function ApplicationContent(props: ApplicationContentProps) {
    const { children, selectedApplication, id, ...other } = props;
    return (
        <div
            hidden={selectedApplication !== id}
            {...other}
        >
            {
                selectedApplication === id && (
                    <Box>
                        {children}
                    </Box>
                )
            }
        </div>
    );
}
