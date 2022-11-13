import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const App = () =>{
  const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
  const [modalVisiblecomida, setModalVisiblecomida] = useState(false);
  const [modalVisibleruta, setModalVisibleruta] = useState(false);
  return(
  <>
    <ScrollView>
    <Modal transparent={true} animationType="slide" visible={modalVisibleplaya} onRequestClose={() => {alert('Modal has been closed.');
    }}>
    <View style={styles.vistaModel}>
    <View style={styles.Modal}>
    <Text style={styles.subtitulo}>Ir a la playa</Text>
    <Text>El Salvador cuenta con hermosas playas a nivel Centroamérica.</Text>
    <Button title="Cerrar" onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}></Button>
    </View>
    </View>
    </Modal>
      <View style={{flexDirection:'row'}} >
        <Image style={styles.banner} source={require('./src/img/bg.jpg')} />
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Que hacer en El Salvador</Text>
        <ScrollView horizontal>
          <View>
          <TouchableHighlight onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}>
            <Image style={styles.ciudad} source={require('./src/img/actividad1.jpg')}/>
          </TouchableHighlight>
          </View>
          <View>
            <Image style={styles.ciudad} source={require('./src/img/actividad2.jpg')}/>
          </View>
          <View>
            <Image style={styles.ciudad} source={require('./src/img/actividad3.jpg')}/>
          </View>
          <View>
            <Image style={styles.ciudad} source={require('./src/img/actividad4.jpg')}/>
          </View>
          <View>
            <Image style={styles.ciudad} source={require('./src/img/actividad5.jpg')}/>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
    <Modal transparent={true} animationType="slide" visible={modalVisiblecomida} onRequestClose={() => {alert('Modal has been closed.');
    }}>
    <View style={styles.vistaModel}>
    <View style={styles.Modal}>
    <Text style={styles.subtitulo}>Pupusas</Text>
    <Text>El Salvador cuenta con la comida más popular de centroamerica.</Text>
    <Button title="Cerrar" onPress={()=>{setModalVisiblecomida(!modalVisiblecomida)}}></Button>
    </View>
    </View>
    </Modal>
    <Text style={styles.titulo}>Platillos Salvadoreños</Text>
    <View>
      <View> 
        <TouchableHighlight onPress={()=>{setModalVisiblecomida(!modalVisiblecomida)}}>
            <Image style={styles.mejores} source={require('./src/img/mejores1.jpg')}/>
        </TouchableHighlight>
      </View>
      <View> 
        <Image style={styles.mejores} source={require('./src/img/mejores2.jpg')}/>
      </View>
      <View> 
        <Image style={styles.mejores} source={require('./src/img/mejores3.jpg')}/>
      </View>
    </View>
    <Modal transparent={true} animationType="slide" visible={modalVisibleruta} onRequestClose={() => {alert('Modal has been closed.');
    }}>
    <View style={styles.vistaModel}>
    <View style={styles.Modal}>
    <Text style={styles.subtitulo}>Arqueologia</Text>
    <Text>El Salvador cuenta con multiples sitios arqueologicos que puedes conocer.</Text>
    <Button title="Cerrar" onPress={()=>{setModalVisibleruta(!modalVisibleruta)}}></Button>
    </View>
    </View>
    </Modal>
    <Text style={styles.titulo}>Rutas Turisticas</Text>
    <View style={styles.listado}>
      <View style={styles.listaItem}> 
        <TouchableHighlight onPress={()=>{setModalVisibleruta(!modalVisibleruta)}}>
            <Image style={styles.mejores} source={require('./src/img/ruta1.jpg')}/>
        </TouchableHighlight>
      </View>
      <View style={styles.listaItem}> 
        <Image style={styles.mejores} source={require('./src/img/ruta2.jpg')}/>
      </View>
      <View style={styles.listaItem}> 
        <Image style={styles.mejores} source={require('./src/img/ruta3.jpg')}/>
      </View>
      <View style={styles.listaItem}> 
        <Image style={styles.mejores} source={require('./src/img/ruta4.jpg')}/>
      </View>
    </View>
  </>
);
}

const styles = StyleSheet.create({
  banner:{
    height:250,
    flex:1
  },
  titulo:{
    fontWeight:'bold',
    fontSize:24,
    marginVertical:10
  },
  contenedor:{
    marginHorizontal:10,
  },
  ciudad:{
    width:250,
    height:300,
    marginRight:10
  },
  mejores:{
    width:'100%',
    height:200,
    marginVertical:5
  },
  listaItem:{
    flexBasis:'49%'
  },
  listado:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  vistaModel:{
    backgroundColor:'#000000aa',
    flex:1,
  },
  Modal:{
    backgroundColor:'#fff',
    margin:50,
    padding:40,
    borderRadius:10,
    flex:1,
  },
  subtitulo:{
    fontWeight:'bold',
    fontSize:14,
    justifyContent:'center',
  }
});
export default App;
