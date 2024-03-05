import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Draw from '../pages/Draw/Draw';
import ProfilePage from '../pages/Profile/Profile';
import List from '../pages/List/List';
import SettingsAndPrivacy from '../pages/SettingAndPrivacy/SettingsAndPrivacy';
import MessagesSetting from '../pages/MessagesSettings/MessagesSetting';
import Messages from '../pages/Messages/Messages';
import Twetting from '../pages/Twetting/Twetting';
import NewMessage from '../pages/NewMessage/NewMessage';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <Draw {...props} />}>
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
      <Drawer.Screen name="ProfilePage" component={ProfilePage} />
      <Drawer.Screen name="ListPage" component={List} />
      <Drawer.Screen name="SettingsAndPrivacyPage" component={SettingsAndPrivacy} />
      <Drawer.Screen name="MessagePage" component={Messages} />
      <Drawer.Screen name="MessagesSettingPage" component={MessagesSetting} />
      <Drawer.Screen name="TwettingPage" component={Twetting} />
      <Drawer.Screen name="NewMessagePage" component={NewMessage} />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
