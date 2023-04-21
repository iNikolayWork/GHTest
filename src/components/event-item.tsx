import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {EventItemNavigationProp, ROUTER_NAMES} from '../navigation/types';
import {TEventItem} from '../types';

function EventItem({
  actorLogin,
  type,
  repoName,
  created_at,
  actorAvatar,
}: TEventItem): JSX.Element {
  const {navigate} = useNavigation<EventItemNavigationProp>();

  const navigateTo = () =>
    navigate(ROUTER_NAMES.DETAILS_SCREEN, {
      actorLogin,
      type,
      repoName,
      created_at,
      actorAvatar,
    });

  return (
    <TouchableOpacity onPress={navigateTo} activeOpacity={0.8}>
      <View style={styles.itemWrapper}>
        <Text style={styles.text}>Логин пользователя: {actorLogin}</Text>
        <Text style={styles.text}>Тип ивента: {type ?? 'Неизвестно'}</Text>
        <Text style={styles.text}>Название репозитория: {repoName}</Text>
        <Text style={styles.text}>
          Дата создания ивента: {created_at ?? 'Неизвестно'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default EventItem;

const styles = StyleSheet.create({
  itemWrapper: {
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#24292F',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  text: {
    color: '#FFFFFFB3',
  },
});
