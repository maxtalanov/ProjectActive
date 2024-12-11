import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    ComponentRender,
} from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter Component', () => {
    test('Рендер', () => {
        ComponentRender(<Counter />, {
            initalState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('Инкрементируем', () => {
        ComponentRender(<Counter />, {
            initalState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('Декрементируем', () => {
        ComponentRender(<Counter />, {
            initalState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
