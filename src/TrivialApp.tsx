import { Provider } from "react-redux";
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
