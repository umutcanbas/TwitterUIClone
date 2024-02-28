import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Messages from '../../pages/Messages/Messages';
import Home from '../../pages/Home/Home';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name='all' component={Home} />
      <Tab.Screen name="Mentions" component={Messages} />
    </Tab.Navigator>
  );
};

export default TopTabs;
