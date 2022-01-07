import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { refrescarPreguntas } from "./actions/questions";
import { AppRouter } from "./routers/AppRouter";
import {store} from './store/store';
import { AppContainer } from "./styled/styledComponents";
import './trivialApp.css';

export const TrivialApp = () => {
    return (
        <Provider store={store}>
            <AppContainer>
                <AppRouter />
            </AppContainer>
        </Provider>
    )
}
