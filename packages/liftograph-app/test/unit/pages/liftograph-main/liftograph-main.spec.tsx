import React from 'react';
import { render, screen } from '@testing-library/react';
import { LiftographMain, TAB_DATA_TESTID, TabApplication } from '../../../../src/pages/liftograph-main/liftograph-main';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { BASE_DATA_TESTID as TAB_PANEL_DATA_TESTID } from '../../../../src/components/tab-panel';
import { Provider } from 'react-redux';
import { store } from '@liftograph/application-store';

describe(LiftographMain.name, () => {
    it('should set currentTab correctly', () => {
        renderLiftographMain();

        screen
            .getByTestId(`${TAB_DATA_TESTID}${TabApplication.Calendar}`)
            .click();
        const calendarContent = screen
            .queryByTestId(
                `${TAB_PANEL_DATA_TESTID}_${TabApplication.Calendar}`
            );
        expect(calendarContent).toBeDefined();

        screen
            .getByTestId(`${TAB_DATA_TESTID}${TabApplication.Workouts}`)
            .click();
        const workoutContent = screen
            .queryByTestId(
                `${TAB_PANEL_DATA_TESTID}_${TabApplication.Workouts}`
            );
        expect(workoutContent).toBeDefined();
    });

    // Need to render inside of memory router context because we have a <Link>
    // element (this may be able to be removed in the future if no react router
    // components are present)
    function renderLiftographMain() {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <LiftographMain />
                </Provider>
            </MemoryRouter>
        );
    }
});
