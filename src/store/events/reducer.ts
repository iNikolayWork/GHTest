import {TEvent} from '../../types';
import {ACTIONS_TYPES, TAction} from './types';

const initialState: TEvent[] = [];

export const EventsReducer = (
  state = initialState,
  action: TAction<TEvent[]>,
) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_EVENTS:
      return action.payload;

    default:
      return state;
  }
};
