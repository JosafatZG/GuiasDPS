import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
/*import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';*/
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import ContactStack from './ContactStack';
import { Icon } from 'react-native-elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab=createBottomTabNavigator();
//const Stack = createStackNavigator();

export default function Navigation(){
  return(
    <Tab.Navigator >
      <Tab.Screen Icon="rowing" name="home" component={HomeStack} options={{title:'Home'}}/>
      <Tab.Screen name="about" component={AboutStack} options={{title:'About'}}/>
      <Tab.Screen name="contact" component={ContactStack} options={{title:'Contact'}}/>
    </Tab.Navigator>
  );
}