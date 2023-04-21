import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import useGetEvents from '../hooks';

function MainScreen(): JSX.Element {
  const {events, renderItems, keyExtractor, isRefreshing, onFocusHandler} =
    useGetEvents();

  return (
    <FlatList
      style={styles.wrapper}
      data={events}
      keyExtractor={keyExtractor}
      renderItem={renderItems}
      refreshing={isRefreshing}
      onRefresh={onFocusHandler}
    />
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 15,
  },
});
