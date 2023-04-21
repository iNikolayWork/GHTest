export enum ACTIONS_TYPES {
  SET_EVENTS = 'SET_EVENTS',
}

export type TAction<T = undefined> = {
  type: ACTIONS_TYPES;
  payload: T;
};
