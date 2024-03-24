import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './navigation/DrawerNavigator';

import PixellsTweet from './components/TweetCards/PixellsTweet/PixellsTweet';

const Router = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default Router;
