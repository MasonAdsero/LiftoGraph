import React from 'react';
import TabPanel, { BASE_DATA_TESTID } from "../../../src/components/tab-panel";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const TAB_INDEX = 'mock-tab-index';

describe(TabPanel.name, () => {
    it('should render content if currentTab equals tabIndex', () => {
        renderTabPanel(TAB_INDEX, TAB_INDEX);
        const tabContainer= screen
            .getByTestId(`${BASE_DATA_TESTID}_${TAB_INDEX}`);
        expect(tabContainer).toBeVisible();
    });
    
    it('should not render content if currentTab does not equal tabIndex', () => {
        renderTabPanel('', TAB_INDEX);
        const tabContainer= screen
            .getByTestId(`${BASE_DATA_TESTID}_${TAB_INDEX}`);
        expect(tabContainer).not.toBeVisible();
    });
    
    function renderTabPanel(currentTab: string, tabIndex: string) {
        render(
            <TabPanel tabIndex={tabIndex} currentTab={currentTab}>
                Mock Content
            </TabPanel>
        );
    }
});