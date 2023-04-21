import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

function GoBackButton({onPress}: {onPress: () => void}): JSX.Element {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.wrapper}>
        <View style={styles.chevron} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default GoBackButton;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    height: '100%',
  },
  chevron: {
    width: 12,
    height: 12,
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    transform: [{rotate: '45deg'}],
    borderColor: '#FFFFFFB3',
  },
});
