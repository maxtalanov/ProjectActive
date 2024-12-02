import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
    ComponentRender,
} from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('1. Рендер Счетчика', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('2. Инкремент', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('3. Инкремент', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
