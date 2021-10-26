import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import Home from '../screens/Home';
import Mode from '../screens/Mode';
import PlayList from '../screens/PlayList';
import Music from '../screens/Music';
import IconGenerator from '../component/GenerateIcon';

const Tab = createBottomTabNavigator();

const iconProperty = iconName => ({
  labelStyle: {
    color: '#044991',
  },
  icon: {
    component: () => <IconGenerator tagName={iconName} color="#cfcfd4" />,
    activeColor: '#232332',
    inactiveColor: '#232332',
  },
  background: {
    activeColor: 'rgba(223,215,243,1)',
    inactiveColor: 'rgba(223,215,243,0)',
  },
});

const tabs = {
  Home: iconProperty('Home'),
  Mode: iconProperty('Mode'),
  PlayList: iconProperty('PlayList'),
  Music: iconProperty('Music'),
};

const AppTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => (
        <AnimatedTabBar tabs={tabs} preset="flashy" {...props} />
      )}
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Mode" component={Mode} />
      <Tab.Screen name="Music" component={Music} />
      <Tab.Screen name="PlayList" component={PlayList} />
    </Tab.Navigator>
  );
};

export default AppTabNavigation;
