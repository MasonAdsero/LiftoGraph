import { getWorkoutsSelector } from '../../../dist';
import { ApplicationState } from '../../../src/store';

it('should return workouts array on state', () => {
    const workouts = [
        {
            name: 'mock workout'
        }
    ];
    const mockApplicationState = {
        workouts
    } as ApplicationState;

    expect(getWorkoutsSelector(mockApplicationState)).toEqual(workouts);
});
