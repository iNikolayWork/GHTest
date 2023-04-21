import {Dispatch} from 'react';
import Toast from 'react-native-toast-message';
import {octokit} from '../../api';
import {TEvent} from '../../types';
import {ACTIONS_TYPES, TAction} from './types';

export const setEvents = (data: TEvent[]) => ({
  type: ACTIONS_TYPES.SET_EVENTS,
  payload: data,
});

export const getEvents =
  () => async (dispatch: Dispatch<TAction<TEvent[]>>) => {
    try {
      const {data} = await octokit.request('GET /events', {
        per_page: 25,
      });
      Toast.show({
        type: 'success',
        text1: 'Данные загружены',
        visibilityTime: 2000,
      });

      dispatch(setEvents(data));
    } catch {
      Toast.show({
        type: 'error',
        text1: 'Не удалось загрузить данные',
        visibilityTime: 2000,
      });
    }
  };
