import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StoreSchema';

interface StoreProviderProps {
    children?: ReactNode,
    initalState?: DeepPartial<StateSchema>,
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initalState,
    } = props;

    const store = createReduxStore(initalState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
