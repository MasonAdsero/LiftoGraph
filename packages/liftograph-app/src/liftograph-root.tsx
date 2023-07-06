import React from 'react';
import WorkoutEditor from '@liftograph/workout-editor-ui';
import styles from './liftograph-root.less';

export const DATA_TESTID = 'liftograph-application-root';

export function LiftographRoot() {
    return (
        <h1
            data-testid={DATA_TESTID}
            className={styles.liftographRoot}
        >
            I'm a react component!
           <WorkoutEditor />
        </h1>
    );
}

