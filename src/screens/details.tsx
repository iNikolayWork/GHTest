import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {ParamList} from '../navigation/types';

function DetailsScreen(): JSX.Element {
  const {params} = useRoute<RouteProp<ParamList, 'Details'>>();
  const {actorLogin, type, repoName, created_at, actorAvatar} = params;

  const getFormatDate = () => {
    if (!created_at) {
      return null;
    }

    const date = new Date(created_at);
    const year = date.getFullYear();
    const month =
      date.getMonth() + 1 > 9 ? date.getMonth() : '0' + (date.getMonth() + 1);
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${year}-${month}-${day}(${hours}:${minutes}:${seconds})`;
  };

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.wrapperInner}>
        <FastImage
          style={styles.avatart}
          source={{
            uri: actorAvatar,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.detailsWrapper}>
          <View style={styles.fieldWrapper}>
            <Text style={styles.fieldName}>Логин пользователя: </Text>
            <Text style={styles.field}>{actorLogin}</Text>
          </View>
          <View style={styles.fieldWrapper}>
            <Text style={styles.fieldName}>Тип ивента: </Text>
            <Text style={styles.field}>{type ?? 'Неизвестно'}</Text>
          </View>
          <View style={styles.fieldWrapper}>
            <Text style={styles.fieldName}>Название репозитория: </Text>
            <Text style={styles.field}>{repoName}</Text>
          </View>
          <View style={styles.fieldWrapper}>
            <Text style={styles.fieldName}>Дата создания ивента: </Text>
            <Text style={styles.field}>{getFormatDate() ?? 'Неизвестно'}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF',
  },
  wrapperInner: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  avatart: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    marginBottom: 10,
  },
  detailsWrapper: {
    width: '100%',
  },
  fieldWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  fieldName: {
    fontSize: 15,
    color: '#24292F',
  },
  field: {
    fontWeight: '700',
    fontSize: 17,
    color: '#24292F',
  },
});
