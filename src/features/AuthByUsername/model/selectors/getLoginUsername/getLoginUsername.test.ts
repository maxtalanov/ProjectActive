import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginUsername,
} from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('Должен вернуть имя пользователя', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'userName',
            },
        };

        expect(getLoginUsername(state as StateSchema)).toEqual('userName');
    });

    test('Должен вернуть пустую строку', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
