import React from 'react';
import { Box } from '@mui/system';

export interface ApplicationContentProps {
    children: React.ReactNode;
    visible: boolean;
}

export function ApplicationContent(props: ApplicationContentProps) {
    const { children, visible } = props;
    return (
        <div
            hidden={visible}
        >
            {
                visible && (
                    <Box>
                        {children}
                    </Box>
                )
            }
        </div>
    );
}
