import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
/*import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';*/
import PerroStack from './PerroStack';
import GatoStack from './GatoStack';
import { Icon } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab=createBottomTabNavigator();
//const Stack = createStackNavigator();

export default function Navigation(){
  return(
    <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'perro') {
              return (
                <FontAwesome5
                  name="dog"
                  size={24}
                  color="black"
                />
              );
            } else if (route.name === 'gato') {
              return (
                <FontAwesome5
                  name="cat"
                  size={24}
                  color="black"
                />
              );
            }
          },
          //tabBarInactiveTintColor: 'gray',
          //tabBarActiveTintColor: 'tomato',
        })}>
      <Tab.Screen name="gato" component={GatoStack} options={{title:'Gato'}}/>
      <Tab.Screen name="perro" component={PerroStack} options={{title:'Perro'}}/>
    </Tab.Navigator>
  );
}