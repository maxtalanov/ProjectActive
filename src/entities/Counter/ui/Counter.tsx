import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const counterValue = useSelector(getCounterValue);

    const increment = (): void => {
        dispatch(counterActions.increment());
    };
    const decrement = (): void => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {`${t('Счетчик')}: ${counterValue}`}
            </h1>
            <Button
                data-testid="increment-btn"
                onClick={increment}
            >
                {t('Увеличить')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('Уменьшить')}
            </Button>
        </div>
    );
};
