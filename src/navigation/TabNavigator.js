import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home/Home';
import Trends from '../pages/Trends/Trends';
import Notification from '../pages/Notification/Notification';
import Messages from '../pages/Messages/Messages';

import HomePageIcon from '../assets/svgs/homePageIcon.svg';
import SearchPageIcon from '../assets/svgs/searchPageIcon.svg';
import NotificationPageIcon from '../assets/svgs/notificationPageIcon.svg';
import MessagePageIcon from '../assets/svgs/messagePageIcon.svg';

import HomePageIconActive from '../assets/svgs/homePageIconActive.svg';
import SearchPageIconActive from '../assets/svgs/searchPageIconActive.svg';
import NotificationPageIconActive from '../assets/svgs/notificationPageIconActive.svg';
import MessagePageIconActive from '../assets/svgs/messagePageIconActive.svg';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="HomePage"
        component={Home}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <HomePageIconActive fill={color} />
            ) : (
              <HomePageIcon fill={color} />
            ),
        }}
      />
      <Tab.Screen
        name="TrendsPage"
        component={Trends}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <SearchPageIconActive fill={color} />
            ) : (
              <SearchPageIcon fill={color} />
            ),
        }}
      />
      <Tab.Screen
        name="NotificationPage"
        component={Notification}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <NotificationPageIconActive fill={color} />
            ) : (
              <NotificationPageIcon fill={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Messages}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <MessagePageIconActive fill={color} />
            ) : (
              <MessagePageIcon fill={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
