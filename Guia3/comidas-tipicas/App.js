import {AppRegistry} from 'react-native';
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { Card } from 'react-native-paper';
import Constants from 'expo-constants';
const DATA = [
    {
      id: '1',
      title: 'Pupusas',
      src:require('./src/img/pupusas.jpg'),
      descripcion: 'La pupusa es una tortilla gruesa a base de masa de maíz o de arroz rellena con uno o más ingredientes, como queso, chicharrón, ayote, frijoles refritos, loroco, etc.​',
    },
    {
      id: '2',
      title: 'Canoas',
      src:require('./src/img/canoas.jpg'),
      descripcion: 'Se trata de un platano frito con relleno de maizena con leche.',
    },
    {
      id: '3',
      title: 'Riguas',
      src:require('./src/img/riguas.jpg'),
      descripcion:'Es una especie de tortilla asada elaborada a base de elote.',
    },
    {
      id: '4',
      title: 'Tamales',
      src:require('./src/img/tamales.jpg'),
      descripcion:'Preparado generalmente a base de masa de maíz o de arroz rellena de carnes, vegetales, salsas y otros ingredientes.​​​',
    },
 ];
 const Item = ({ title, img, descripcion}) => (
    <View style={styles.item}>
    <Card style={styles.tarjetaP}>
      <Card style={styles.tarjetaT}>
        <Text style={styles.title}>{title}</Text>
      </Card>
      <Card style={styles.tarjetaI}>
        <Image style={styles.img} source={img}/>
      </Card>
      <Card style={styles.tarjetaD}>
        <Text style={styles.descripcion}>{descripcion}</Text>
      </Card>
    </Card>
    </View>
 );

 const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.src} descripcion={item.descripcion}/>
  );

 return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}/>
    </SafeAreaView>
);
 }

 const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
  },
  item: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
  },
  tarjetaP:{
    backgroundColor: '#69c0f4',
  },
  tarjetaT:{
    backgroundColor: '#4e83a2',
    alignItems: 'center',
  },
  tarjetaI:{
    alignItems:'center',
    backgroundColor:'#e0f390',
  },
  tarjetaD:{
    backgroundColor: '#789eb5',
    alignItems: 'center',
  },
  title: {
      fontSize: 32,
      fontWeight:'bold',
  },
  descripcion:{
    fontSize: 15,
    textAlign:'center',
  },
  img:{
    width:150,
    height:150,
    align:'center',
    //borderRadius:200,
    borderColor:'#d35647',
    resizeMode:'contain',
    margin:8
  }
 });
export default App
