import { CounterSchema } from '../types/CounterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    test('1. Декрементируем: увеличиваем счетчик', () => {
        const state: CounterSchema = { value: 10 };

        expect(
            counterReducer(state, counterActions.decrement()),
        ).toEqual({ value: 9 });
    });

    test('2. Инкрементируем уменьшаем счетчик', () => {
        const state: CounterSchema = { value: 10 };

        expect(
            counterReducer(state, counterActions.increment()),
        ).toEqual({ value: 11 });
    });

    test('3. Должен работать с пустым состоянием при увелечении', () => {
        expect(
            counterReducer(undefined, counterActions.increment()),
        ).toEqual({ value: 1 });
    });

    test('4. Должен работать с пустым состоянием при уменьшении', () => {
        expect(
            counterReducer(undefined, counterActions.decrement()),
        ).toEqual({ value: -1 });
    });
});
