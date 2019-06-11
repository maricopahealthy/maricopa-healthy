import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from  './reducers/rootReducer';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default(initialState) => {
    return createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(logger, thunkMiddleware)
        )
    );
}
