import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Gato from '../screens/Gato';
const Stack= createStackNavigator();
export default function GatoStack(){
return(
<Stack.Navigator>
<Stack.Screen name="gato" component={Gato}
options={{title:'Gato'}}/>
</Stack.Navigator>
);
}