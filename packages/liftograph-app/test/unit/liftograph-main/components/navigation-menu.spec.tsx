import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { BUTTON_TESTID, NavigationMenu } from '../../../../src/liftograph-main/components/navigation-menu';

enum TestMenuIds {
    Primary = 'primary',
    Secondary = 'secondary'
}

describe(NavigationMenu.name, () => {
    const mockedOnClick = jest.fn();

    afterEach(() => jest.clearAllMocks());

    it('should pass selected menu item id on click', async () => {
        renderNavigationMenu(TestMenuIds.Primary);
        const button = await screen
            .findByTestId(`${BUTTON_TESTID}${TestMenuIds.Secondary}`);
        act(() => button.click());
        expect(mockedOnClick).toBeCalledWith(TestMenuIds.Secondary);
    });

    it('should not trigger on click if clicking an already selected button', async () => {
        renderNavigationMenu(TestMenuIds.Primary);
        const button = await screen
            .findByTestId(`${BUTTON_TESTID}${TestMenuIds.Primary}`);
        act(() => button.click());
        expect(mockedOnClick).toBeCalledTimes(0);
    });

    function renderNavigationMenu(selectedMenuItem: TestMenuIds) {
        const menuData = [
            {
                id: TestMenuIds.Primary,
                label: 'Primary page',
                Icon: () => <div></div>
            },
            {
                id: TestMenuIds.Secondary,
                label: 'Secondary page'
            }
        ];

        render(
            <NavigationMenu
                onClick={mockedOnClick}
                selectedMenuItem={selectedMenuItem}
                menuData={menuData}
            />
        );
    }
});
