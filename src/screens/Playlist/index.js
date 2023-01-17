import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import Layout from 'components/Layout';
import Lists from './Lists';

import {Colors} from 'constants';
import {setList} from 'reducers/Playlist/actions';
import {playlist, sounds} from '../../../data';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './navigations';

export default function Playlist() {
  const dispatch = useDispatch();

  useEffect(() => {
    setReduxData();
  }, []);

  const setReduxData = async () => {
    dispatch(
      setList(
        playlist.map(list => ({
          ...list,
          sounds: list.items.map(item => {
            const sound = sounds.find(sound => sound.id === item);

            return {
              ...sound,
              id: String(sound.id),
            };
          }),
        })),
      ),
    );
  };

  return (
    <Layout>
      <RootNavigation />
    </Layout>
  );
}
