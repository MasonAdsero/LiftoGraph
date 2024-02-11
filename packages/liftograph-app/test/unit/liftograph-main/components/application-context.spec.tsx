import React from 'react';
import { render, screen } from '@testing-library/react';
import { ApplicationContent } from '../../../../src/liftograph-main/components/application-context';

describe(ApplicationContent.name, () => {
    const MOCK_CONTENT_ID = 'test-mock-application-content';

    it('should render children if visible', async () => {
        renderApplicationContent(true);
        expect(await screen.findByTestId(MOCK_CONTENT_ID)).toBeDefined();
    });

    it('should not render children if not visible', () => {
        renderApplicationContent(false);
        expect(screen.queryByTestId(MOCK_CONTENT_ID)).toBeNull();
    });

    function renderApplicationContent(visible: boolean) {
        render(
            <ApplicationContent
                visible={visible}
            >
                <div data-testid={MOCK_CONTENT_ID}>
                    Test application content
                </div>
            </ApplicationContent>
        )
    }
});
