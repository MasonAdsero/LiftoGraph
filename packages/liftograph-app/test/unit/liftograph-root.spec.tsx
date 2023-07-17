import React from 'react';
import { LiftographRoot, DATA_TESTID, HOME_BUTTON_DATA_TESTID } from '../../src/liftograph-root';
import { render, RenderResult } from '@testing-library/react';
import { WORKOUT_EDITOR_LINK_DATA_TESTID } from '../../src/pages/liftograph-main';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => {
    const actualNav = jest.requireActual('react-router-dom');
    return {
        ...actualNav,
        useNavigate: () => mockedNavigate,
    };
});

describe('Mock tests to demonstrate jest', () => {
    let renderResult: RenderResult;
    let liftographRootElement: HTMLElement;

    beforeEach(() => {
        renderResult = render(<LiftographRoot />);
        liftographRootElement = renderResult.getByTestId(DATA_TESTID);
    });

    it('should not show home button if the application path is set to root', () => {
        expect(queryHomeButtonElement()).toBeNull();
    });

    it('should show home button if the application is not set to root', () => {
        switchPageToWorkoutEditor();
        expect(queryHomeButtonElement).toBeDefined();
    });

    it('should return to home page if application path is not set to root', () => {
        switchPageToWorkoutEditor();
        const homeButton = queryHomeButtonElement()!;
        homeButton.click();
        expect(mockedNavigate).toBeCalledTimes(1);
    });

    function switchPageToWorkoutEditor() {
        const workoutEditorLink = renderResult
            .getByTestId(WORKOUT_EDITOR_LINK_DATA_TESTID);
        workoutEditorLink.click();
    }

    function queryHomeButtonElement() {
        return renderResult.queryByTestId(HOME_BUTTON_DATA_TESTID);
    }
});
