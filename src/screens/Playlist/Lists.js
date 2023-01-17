import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Card,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';

import Item from './Item';
import Title from './Title';

import {Colors} from 'constants';
import RoadTitle from './Title';
import Album from './Album';
import PopTitle from './PopTitle';
import RockTitle from './RockTitle';
import Album1 from './Album1';
import Album2 from './Album2';

const {width} = Dimensions.get('window'),
  padding = 40;

export default function Lists({navigation}) {
  const {items} = useSelector(state => state.Playlist);
  const [index, setIndex] = useState(0);
  const _onPressTabButton = async key => {
    setIndex(key);
  };
 console.log('fIndex',index)
  const renderRoad = () => {
    if (!items.length) return null;

    const {id, sounds} = items[0];
    // console.log('sund', sounds);

    return (
      <View style={{}}>
        <RoadTitle {...{index, items}} />
        <FlatList
          data={sounds}
          // keyExtractor={({id}) => id}
          horizontal
          renderItem={({item, index}) => <Album navigation={navigation} playlistId={id} {...item} />}
          keyExtractor={(item, index) => index.toString()}
          // renderItem={({item}) => <Album navigation={navigation} playlistId={id} {...item} />}
        />
      </View>
    );
  };

  const renderPop = () => {
    if (!items.length) return null;

    const {id, sounds} = items[1];
    // console.log('sund', sounds);

    return (
      <View style={{}}>
        <PopTitle {...{index, items}} />
        <FlatList
          data={sounds}
          keyExtractor={({id}) => id}
          horizontal
          renderItem={({item}) => <Album1 navigation={navigation} playlistId={id} {...item} />}
        />
      </View>
    );
  };
  const renderRock = () => {
    if (!items.length) return null;

    const {id, sounds} = items[2];
    // console.log('sund', sounds);

    return (
      <View style={{}}>
        <RockTitle {...{index, items}} />
        <FlatList
          data={sounds}
          keyExtractor={({id}) => id}
          horizontal
          renderItem={({item,index}) => <Album2 navigation={navigation} playlistId={id} {...item} />}
        />
      </View>
    );
  };

  //   const renderItemComponent = item => {
  // 	console.log(item)
  //     // return <Text>{item.title}</Text>;
  //   };

  return (
    <View style={styles.container}>
      <ScrollView>
       
        {/* <RoadTitle {...{index, items}} /> */}

        {/* <SafeAreaView>
        <FlatList
          data={items}
          renderItem={item => renderItemComponent(item)}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView> */}

        {/* <View style={styles.tabBarContainer}> */}

        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
        {/* <View style={styles.tabBar}>
          {items.map(({title, artwork}, key) => {
            const isActive = key === index;
            console.log('title', title);
            console.log('artwork', artwork);
            return (
              <TouchableOpacity
                style={styles.cartSyles}
                key={key}
                onPress={_onPressTabButton.bind(this, key)}>
                <Text
                  style={{
                    fontSize: isActive ? 16 : 14,
                    color: isActive ? Colors.white : Colors.lightGray,
                    textAlign: 'center',
                    //   paddingRight: 20,
                  }}>
                  {title}
                </Text>
                <Image
                  style={{width: 100, height: 60}}
                  source={{
                    uri: artwork,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View> */}
        {/* </ScrollView> */}
        {/* </View> */}
        <View style={styles.scene}>
        {renderPop()}
        {renderRoad()}
        {renderRock()}
        </View>
      </ScrollView>
      {/* <View style={styles.sceneContainer}>{Songs()}</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
  },
  scene: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.playerBG,
    // marginHorizontal: padding / 2,
  },
  tabBar: {
    // flexDirection: 'column',
    // paddingHorizontal: padding / 2,
    // alignItems: 'center',
    // height: 30,
    // margin:10,
    // display:'flex',
    // flex:3
    // backgroundColor: "#7CA1B4",
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cartSyles: {
    // backgroundColor: 'yellow',
    // padding: 10,
    // height: 90,
    // width: 120,
    // borderRadius: 10,
    backgroundColor: Colors.lightGray,
    width: 150,
    height: 130,
    margin: 15,
    borderRadius: 15,
  },
  tabBarContainer: {
    height: '70%',
    // backgroundColor: Colors.primary,
  },
  sceneContainer: {
    top: -50,
    flex: 1,
  },
  background: {
    backgroundColor: '#F2F2F2',
    height: '100%',
    flex: 1,
  },
  cards: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
});
