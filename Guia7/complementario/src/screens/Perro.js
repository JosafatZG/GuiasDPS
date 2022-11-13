import {AppRegistry} from 'react-native';
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { Card } from 'react-native-paper';
import Constants from 'expo-constants';
const DATA = [
    {
      id: '1',
      title: 'Alaskan Malamute',
      src:require('../img/perro1.jpg'),
      descripcion: 'Estados Unidos',
    },
    {
      id: '2',
      title: 'Golden Retriever',
      src:require('../img/perro2.jpg'),
      descripcion: 'Inglaterra',
    },
    {
      id: '3',
      title: 'Rottweiler',
      src:require('../img/perro3.jpg'),
      descripcion:'Alemania',
    },
    {
      id: '4',
      title: 'Pitbull',
      src:require('../img/perro4pitbull.jpg'),
      descripcion:'Estados Unidos',
    },
    {
      id: '5',
      title: 'Chihuahua',
      src:require('../img/perro5chihuahua.jpg'),
      descripcion:'Mexico',
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

 const Gato = () => {
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
export default Gato