import { Workout } from '@liftograph/types-common';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import workoutsSlice from './workouts/workouts-slice';

export interface ApplicationState {
    workouts: Workout[];
}

export function initializeStore() {
    return configureStore<ApplicationState>({
        reducer: {
            workouts: workoutsSlice
        }
    })
}

export const store = initializeStore();
export const useStoreDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useStoreSelection = useSelector.withTypes<ApplicationState>();
