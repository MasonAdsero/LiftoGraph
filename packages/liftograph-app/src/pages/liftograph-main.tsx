import React from 'react';
import { Link } from 'react-router-dom';

export const WORKOUT_EDITOR_LINK_DATA_TESTID = 'workout-editor-link';

export function LiftographMain() {
    return (
        <div>
            <Link
                data-testid={WORKOUT_EDITOR_LINK_DATA_TESTID}
                to='workout-editor'
            >
                Workout editor
            </Link>
        </div>
    );
}
