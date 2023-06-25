import React from 'react';
import { LiftographRoot, DATA_TESTID } from '../../src/liftograph-root';
import { render } from '@testing-library/react';

describe('Mock tests to demonstrate jest', () => {
    it('should render index component', () => {
        const appComponent = render(<LiftographRoot />);
        expect(appComponent.getByTestId(DATA_TESTID)).toBeDefined();
    });
});
