import React from 'react';
import TabPanel, { BASE_DATA_TESTID } from '../../../src/components/tab-panel';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const TAB_INDEX = 'mock-tab-index';
const MOCK_CONTENT_DATA_TESTID = 'mock-test-id';

describe(TabPanel.name, () => {
    it('should render content if currentTab equals tabIndex', () => {
        renderTabPanel(TAB_INDEX, TAB_INDEX);
        const tabContainer= screen
            .getByTestId(`${BASE_DATA_TESTID}-${TAB_INDEX}`);
        expect(tabContainer).toBeVisible();
        expect(screen.getByTestId(MOCK_CONTENT_DATA_TESTID))
            .toBeInTheDocument();
    });
    it('should not render content if currentTab does not equal tabIndex', () => {
        renderTabPanel('', TAB_INDEX);
        const tabContainer= screen
            .getByTestId(`${BASE_DATA_TESTID}-${TAB_INDEX}`);
        expect(tabContainer).not.toBeVisible();
        expect(screen.queryByTestId(MOCK_CONTENT_DATA_TESTID))
            .toBeNull();
    });
    function renderTabPanel(currentTab: string, tabIndex: string) {
        render(
            <TabPanel tabIndex={tabIndex} currentTab={currentTab}>
                <div data-testid={MOCK_CONTENT_DATA_TESTID}>
                    Mock tab content
                </div>
            </TabPanel>
        );
    }
});
