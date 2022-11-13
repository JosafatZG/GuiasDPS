import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Perro from '../screens/Perro';
const Stack= createStackNavigator();
export default function PerroStack(){
return(
<Stack.Navigator>
<Stack.Screen name="perro" component={Perro}
options={{title:'Perro'}}/>
</Stack.Navigator>
);
}