import { Box } from '@mui/material';
import React from 'react';

export interface TabPanelProps<T> {
    /** Child components to be rendered within the tab panel */
    children?: React.ReactNode;
    /** Value of the currently selected tab */
    currentTab: T;
    /** Value of this tab */
    tabIndex: T;
}

export default function TabPanel<T>(props: TabPanelProps<T>) {
    const { children, currentTab, tabIndex, ...other } = props;
    return (
        <div
            hidden={currentTab !== tabIndex}
            {...other}
        >
            {
                currentTab === tabIndex && (
                    <Box>
                        {children}
                    </Box>
                )
            }
        </div>
    );
}
