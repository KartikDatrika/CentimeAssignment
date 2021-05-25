import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import expenditureReducer from './ExpenditureVisualization/expenditure-action-reducer'

export interface IAppState{
    expenditureData: {data:any[]}
}

const rootReducer = combineReducers({
    expenditureData: expenditureReducer
})

export default function configureStore() {
    const middlewares = [thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)
    const composedEnhancers = compose(middlewareEnhancer)
    const store = createStore(rootReducer, composedEnhancers);
    return store
}
