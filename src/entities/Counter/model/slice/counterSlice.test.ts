import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
    test('Декрементируем состояние', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(
            counterReducer(state, counterActions.decrement()),
        ).toEqual({ value: 9 });
    });
    test('Инкрементируем состояние', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(
            counterReducer(state, counterActions.increment()),
        ).toEqual({ value: 11 });
    });
    test('Должен работать с пустым состоянием', () => {
        expect(
            counterReducer(undefined, counterActions.increment()),
        ).toEqual({ value: 1 });
    });
});
