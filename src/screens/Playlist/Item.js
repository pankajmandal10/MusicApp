import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {itemPlay} from 'reducers/Player/actions';
import {Colors} from 'constants';

import {Play} from 'components/Icons';
import AlbumbSongList from './AlbumSongList';
import { setUserPlaying } from '../../reducers/Player/actions';
const {width} = Dimensions.get('window'),
  padding = 40;
export default function Item({route, navigation}) {
  const {playlistId,items, otherParam} = route.params;
  // const {items} = useSelector(state => state.Playlist);
  // const [index, setIndex] = useState(key);
  const { playing, shuffle, replay } = useSelector(state => state.Player)

  const dispatch = useDispatch();

  const _play = async(id) => {
    console.log('id, playlistId',id, playlistId.id)
    await dispatch(itemPlay(id, playlistId.id));
    // dispatch(setUserPlaying(!playing))
  };
  console.log('aaaa',items)

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.item}>
        <Image source={item.artwork} style={styles.artwork} />
        <View style={{flex: 1}}>
          <Text style={{color: Colors.gray}}>{item.title}</Text>
          <Text
            style={{color: 'rgb(82, 88, 94)'}}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.artist}
          </Text>
        </View>
        <TouchableOpacity
          onPress={()=>_play(item.id)}
          // {}_play
        >
          <View style={styles.play}>
            <Play />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.scene}>
      <FlatList
        data={items}
        // keyExtractor={({item}) => item}
        renderItem={({item, index}) => renderItem({item, index})}
        keyExtractor={(item, index) => index.toString()}
        // renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
}

const styles = {
  item: {
    height: 70,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray,
    padding: 10,
    flexDirection: 'row',
  },
  scene: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.playerBG,
    // marginHorizontal: padding / 2,
  },
  artwork: {
    width: 60,
    height: 50,
    marginRight: 15,
  },
  play: {
    width: 50,
    height: 50,
    padding: 5,
    paddingLeft: 20,
  },
};
