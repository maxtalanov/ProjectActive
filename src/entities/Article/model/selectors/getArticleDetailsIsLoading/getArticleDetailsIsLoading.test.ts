import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsIsLoading } from './getArticleDetailsIsLoading';

describe('getArticleDetailsIsLoading.test', () => {
    test('1. Возвращает true, если isLoading установлен в true', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('2. Возвращает false, если isLoading установлен в false', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: false,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
});
