import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const App = () =>{
  return(
    <>
      <View style={styles.contenedor}>
      <View style={styles.caja1}></View>
      <View style={styles.caja2}></View>
      <View style={styles.caja3}></View>
      <View style={styles.caja4}></View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  contenedor:{
    backgroundColor:'cornflowerblue',
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'flex-end'
  },
  caja1:{
    padding:20,
    flex:1,
    backgroundColor:'navy'
  },
  caja2:{
    padding:20,
    flex:1,
    backgroundColor:'yellow'
  },
  caja3:{
    padding:20,
    flex:1,
    backgroundColor:'green'
  },
  caja4:{
    padding:20,
    flex:2,
    backgroundColor:'teal'
  },
});
export default App;
