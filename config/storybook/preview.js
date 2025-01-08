import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { TranslationDecorators } from '../../src/shared/config/storybook/TranslationDecorators/TranslationDecorators';
import { Theme } from '../../src/app/providers/ThemeProvider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    StyleDecorator,
    TranslationDecorators,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
];
