import React from 'react';
import {View, Text} from 'react-native';

export default function PopTitle({items, index}) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>
        {items.length && items[1].title}
      </Text>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    padding: 20,
    flex: 1,
  },
};
