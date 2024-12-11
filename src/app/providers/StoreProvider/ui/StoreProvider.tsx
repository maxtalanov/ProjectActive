import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from '../config/StoreSchema';

interface StoreProviderProps {
    children?: ReactNode,
    initalState?: StateSchema,
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initalState,
    } = props;

    const store = createReduxStore(initalState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
