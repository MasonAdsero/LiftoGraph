// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';
import { LiftographMain, TAB_DATA_TESTID, ApplicationId } from '../../../../src/pages/liftograph-main/liftograph-main';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '@liftograph/application-store';

describe(LiftographMain.name, () => {

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
