import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('classNames', () => {
    test('should render correctly', () => {
        render(<Button>TEST</Button>);

        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
