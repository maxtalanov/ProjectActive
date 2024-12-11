import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter reducer', () => {
    test('Должно возвращаться начальное состояние', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };

        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
