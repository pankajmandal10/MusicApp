import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Colors} from 'constants';
import { useSelector } from 'react-redux';

export default function Album2({
  artwork,
  navigation,
  title,
  artist,
  playlistId,
}) {
  const {items} = useSelector(state => state.Playlist);

  if (!items.length) return null;
  const {id, sounds} = items[2];
console.log('soud',sounds)
  return (
    <View style={styles.item}>
      <TouchableOpacity
      key={id}
        onPress={async() =>
          navigation.navigate('Item', {
            playlistId:{id},
            items:sounds
            // id:id,
            // key: playlistId,
          })
        }>
        <Image source={artwork} style={styles.artwork} />
        <Text style={{color: Colors.gray, textAlign: 'center', padding: 5}}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  item: {
    // height: 70,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray,
    padding: 10,
    flexDirection: 'column',
  },
  artwork: {
    width: 120,
    height: 120,
    marginRight: 15,
  },
  play: {
    width: 50,
    height: 50,
    padding: 5,
    paddingLeft: 20,
  },
};
