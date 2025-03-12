import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsError } from './getArticleDetailsError';

describe('getArticleDetailsError.test', () => {
    test('1. Возвращает ошибку, если error присутствует в state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: '123',
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('123');
    });

    test('2. Возвращает undefined, если error отсутствует в state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toBeUndefined();
    });
});
