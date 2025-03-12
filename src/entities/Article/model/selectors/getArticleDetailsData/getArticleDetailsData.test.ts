import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from './getArticleDetailsData';

describe('getArticleDetailsData.test', () => {
    test('1. Возвращает данные статьи, если data присутствует в state', () => {
        const data = {
            id: '1',
            title: 'Javascript news',
            subtitle: 'Что нового в JS за 2022 год?',
            img: 'https://example.com/image.png',
            views: 1000,
            createdAt: '2022-01-01',
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });
    test('2. Возвращает undefined, если data отсутствует в state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsData(state as StateSchema)).toBeUndefined();
    });
});
