import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import WorkoutEditorRoot from '@liftograph/workout-editor-ui';
import { LiftographMain } from './liftograph-main';

export const pageRouter = createBrowserRouter([
    createApplicationRoute('/', <LiftographMain />),
    createApplicationRoute('/workout-editor', <WorkoutEditorRoot />)
]);

// TODO: Strongly type application
/** Creates a route for sub-applications that provides common functionality */
function createApplicationRoute(path: string, element: any) {
    return {
        path,
        element
    };
}
