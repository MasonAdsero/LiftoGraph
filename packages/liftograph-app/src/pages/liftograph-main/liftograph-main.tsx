import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { v4 } from 'uuid';
import TabPanel from '../../components/tab-panel';
import styles from './styles.less'
import { Link } from 'react-router-dom';
import { Button } from '@mui/base';
import { addWorkout, getWorkoutsSelector, useStoreDispatch, useStoreSelection } from '@liftograph/application-store';

export const WORKOUT_EDITOR_LINK_DATA_TESTID = 'workout-editor-link';
export const TAB_DATA_TESTID = 'liftograph-tab-';

export enum TabApplication {
    Workouts = 'workouts',
    Calendar = 'calendar'
}

export function LiftographMain() {
    const [currentTab, setCurrentTab] = useState(TabApplication.Workouts);
    const workouts = useStoreSelection(getWorkoutsSelector);
    const dispatch = useStoreDispatch();

    return (
        <div className={styles.liftographTabContainer}>
            <Box
                sx={{
                    width: '95%',
                    marginTop: '10px'
                }}
            >
                <Tabs value={currentTab} onChange={changeTab}>
                    <Tab
                        data-testid={`
                            ${TAB_DATA_TESTID}${TabApplication.Workouts}
                        `}
                        label='Workouts'
                        value={TabApplication.Workouts}
                    />
                    <Tab
                        data-testid={`
                            ${TAB_DATA_TESTID}${TabApplication.Calendar}
                        `}
                        label='Calendar'
                        value={TabApplication.Calendar}
                    />
                </Tabs>
                <TabPanel
                    currentTab={currentTab}
                    tabIndex={TabApplication.Workouts}
                >
                    ToDo: Implement workouts sub-application
                    <Link
                        data-testid={WORKOUT_EDITOR_LINK_DATA_TESTID}
                        to='workout-editor'
                    >
                        Workout editor
                    </Link>

                    {/* Below is temporary to test state is working. */}
                    <br />
                    <Button
                        onClick={() => {
                            let name = prompt('Name your workout') ?? 'test';
                            dispatch(
                                addWorkout({
                                    name,
                                    id: v4(),
                                    exercises: []
                                })
                            );
                        }}
                    >
                        Add Workout
                    </Button>

                    <h3>Workouts</h3>
                    {
                        workouts.map((workout) => {
                            return (
                                <p>
                                    {workout.name}
                                </p>
                            );
                        })
                    }
                </TabPanel>
                <TabPanel
                    currentTab={currentTab}
                    tabIndex={TabApplication.Calendar}
                >
                    ToDo: Implement calendar sub-application
                </TabPanel>
            </Box>
        </div>
    );

    // Ignoring because function parameter is needed, but not used
    // @ts-ignore
    function changeTab(event: React.SyntheticEvent, nextTab: TabApplication) {
        setCurrentTab(nextTab);
    }
}
