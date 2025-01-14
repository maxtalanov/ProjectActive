import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('Должен вернуть ошибку', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'Error test',
            },
        };

        expect(getLoginError(state as StateSchema)).toEqual('Error test');
    });
    test('Должен работать с пустым состоянием', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
