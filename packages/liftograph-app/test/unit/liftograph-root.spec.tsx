import React from 'react';
import { LiftographRoot, HOME_BUTTON_DATA_TESTID } from '../../src/liftograph-root';
import { act, render, screen } from '@testing-library/react';
import { WORKOUT_EDITOR_LINK_DATA_TESTID } from '../../src/pages/liftograph-main/liftograph-main';
import { MemoryRouter } from 'react-router-dom';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => {
    const actualNav = jest.requireActual('react-router-dom');
    return {
        ...actualNav,
        useNavigate: () => mockedNavigate,
    };
});

afterEach(() => { jest.clearAllMocks(); })

it('should not show home button if the application path is set to root', () => {
    renderWithRouter();
    expect(queryHomeButtonElement()).toBeNull();
});

// TODO Unskip these tests and re-implement after main application is finalized

it.skip('should show home button if the application is not set to root', async () => {
    renderWithRouter();
    await switchPageToWorkoutEditor();
    expect(queryHomeButtonElement()).toBeDefined();
});

it.skip('should return to home page if application path is not set to root', async () => {
    renderWithRouter();
    await switchPageToWorkoutEditor();
    const homeButton = await screen
        .findByTestId(HOME_BUTTON_DATA_TESTID);
    act(() => homeButton.click());
    expect(mockedNavigate).toBeCalledTimes(1);
});

async function switchPageToWorkoutEditor() {
    const workoutEditorLink = await screen
        .findByTestId(WORKOUT_EDITOR_LINK_DATA_TESTID);
    act(() => {workoutEditorLink.click()});
}

function queryHomeButtonElement() {
    return screen.queryByTestId(HOME_BUTTON_DATA_TESTID);
}

function renderWithRouter() {
    render(
        <MemoryRouter>
            <LiftographRoot />
        </MemoryRouter>
    );
}
