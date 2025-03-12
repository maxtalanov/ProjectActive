import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleTextBlock, ArticleType } from 'entities/Article/model/types/article';
import { articleDetailsReducer } from './articleDetailsSlice';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const articleData: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://example.com/image.png',
    views: 1000,
    createdAt: '2022-01-01',
    type: [ArticleType.IT],
    blocks: [],
};

describe('articleDetailsSlice.test', () => {
    test('test fetchArticleById.pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { isLoading: false, error: undefined };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test fetchArticleById.fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { isLoading: true, data: undefined };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(articleData, '', ''),
        )).toEqual({
            isLoading: false,
            data: articleData,
        });
    });

    test('test fetchArticleById.rejected', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: undefined,
            error: 'error',
        };

        const error = new Error('error');
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.rejected(error, '', ''),
        )).toEqual({
            isLoading: false,
            data: undefined,
            error: error.message,
        });
    });
});
