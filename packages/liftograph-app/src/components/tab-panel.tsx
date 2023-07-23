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

export const BASE_DATA_TESTID = 'tab-panel-content-container';

export default function TabPanel<T>(props: TabPanelProps<T>) {
    const { children, currentTab, tabIndex, ...other } = props;
    return (
        <div
            data-testid={`${BASE_DATA_TESTID}-${tabIndex}`}
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
