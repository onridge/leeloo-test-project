import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import Paths from './paths';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Paths />
                <GlobalStyle />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
