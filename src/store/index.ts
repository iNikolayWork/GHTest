import {AnyAction, applyMiddleware, createStore, combineReducers} from 'redux';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {EventsReducer} from './events/reducer';

const RootReducer = combineReducers({
  events: EventsReducer,
});

export const store = createStore(RootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export const useAppDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
