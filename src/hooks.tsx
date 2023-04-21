import React, {useCallback, useRef, useState} from 'react';
import {ListRenderItem} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from './store';
import {getEvents} from './store/events/action';
import EventItem from './components/event-item';
import {TEvent} from './types';

function useGetEvents() {
  const events = useAppSelector(store => store.events);
  const dispatch = useAppDispatch();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const timerId = useRef<NodeJS.Timer | null>(null);

  const stopTimer = () => {
    if (timerId.current !== null) {
      clearInterval(timerId.current);
      timerId.current = null;
    }
  };

  const startLoadingEvents = async () => {
    setIsRefreshing(true);

    stopTimer();

    await dispatch(getEvents());

    timerId.current = setInterval(() => {
      dispatch(getEvents());
    }, 30000);

    setIsRefreshing(false);
  };

  const onFocusHandler = () => {
    startLoadingEvents();

    return () => {
      stopTimer();
    };
  };

  useFocusEffect(useCallback(onFocusHandler, []));

  const renderItems: ListRenderItem<TEvent> = ({item}) => {
    return (
      <EventItem
        actorLogin={item.actor.login}
        type={item.type}
        repoName={item.repo.name}
        created_at={item.created_at}
        actorAvatar={item.actor.avatar_url}
      />
    );
  };

  const keyExtractor = (item: TEvent) => item.id;

  return {
    events,
    renderItems,
    keyExtractor,
    isRefreshing,
    onFocusHandler,
  };
}

export default useGetEvents;
