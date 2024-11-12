import { addDecorator } from '@storybook/react';
import { styleDecorator } from '../../src/shared/config/storybook/styleDecorator/styleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/themeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { routerDecorator } from '../../src/shared/config/storybook/routerDecorator/routerDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(styleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(routerDecorator);
