import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const App = () =>{
  const [modalVisiblehotel, setModalVisiblehotel] = useState(false);
  const [modalVisibledoble, setModalVisibledoble] = useState(false);
  const [modalVisiblecomida, setModalVisiblecomida] = useState(false);
  const [modalVisiblepiscina, setModalVisiblepiscina] = useState(false);
  const [modalVisibleruta, setModalVisibleruta] = useState(false);
  const [modalVisiblelg, setModalVisiblelg] = useState(false);
  return(
  <>
    <ScrollView>
    <Modal transparent={true} animationType="slide" visible={modalVisiblehotel} onRequestClose={() => {alert('Modal has been closed.');
    }}>
    <View style={styles.vistaModel}>
    <View style={styles.Modal}>
    <Text style={styles.subtitulo}>Habitacion sencilla</Text>
    <Text>Si no tienes compañia puedes pedir una habitación comoda y sencilla.</Text>
    <Button title="Cerrar" onPress={()=>{setModalVisiblehotel(!modalVisiblehotel)}}></Button>
    </View>
    </View>
    </Modal>
    <Modal transparent={true} animationType="slide" visible={modalVisibledoble} onRequestClose={() => {alert('Modal has been closed.');
    }}>
    <View style={styles.vistaModel}>
    <View style={styles.Modal}>
    <Text style={styles.subtitulo}>Habitacion doble</Text>
    <Text>Si tienes compañia puedes pedir una habitación comoda y doble.</Text>
    <Button title="Cerrar" onPress={()=>{setModalVisibledoble(!modalVisibledoble)}}></Button>
    </View>
    </View>
    </Modal>
      <View style={{flexDirection:'row'}} >
        <Image style={styles.banner} source={require('./src/img/hotel.jpg')} />
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Hotel El Salvador</Text>
        <ScrollView horizontal>
          <View>
          <TouchableHighlight onPress={()=>{setModalVisiblehotel(!modalVisiblehotel)}}>
            <Image style={styles.ciudad} source={require('./src/img/sencilla.jpg')}/>
          </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight onPress={()=>{setModalVisibledoble(!modalVisibledoble)}}>
            <Image style={styles.ciudad} source={require('./src/img/doble.jpg')}/>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
    <Modal transparent={true} animationType="slide" visible={modalVisiblecomida} onRequestClose={() => {alert('Modal has been closed.');
    }}>
    <View style={styles.vistaModel}>
    <View style={styles.Modal}>
    <Text style={styles.subtitulo}>Restaurante</Text>
    <Text>Disfruta de la deliciosa comida de nuestro restaurante.</Text>
    <Button title="Cerrar" onPress={()=>{setModalVisiblecomida(!modalVisiblecomida)}}></Button>
    </View>
    </View>
    </Modal>
    <Modal transparent={true} animationType="slide" visible={modalVisiblepiscina} onRequestClose={() => {alert('Modal has been closed.');
    }}>
    <View style={styles.vistaModel}>
    <View style={styles.Modal}>
    <Text style={styles.subtitulo}>Piscina</Text>
    <Text>Disfruta de la fresca agua de nuestra piscina.</Text>
    <Button title="Cerrar" onPress={()=>{setModalVisiblepiscina(!modalVisiblepiscina)}}></Button>
    </View>
    </View>
    </Modal>
    <Text style={styles.titulo}>Servicios</Text>
    <View>
      <View> 
        <TouchableHighlight onPress={()=>{setModalVisiblecomida(!modalVisiblecomida)}}>
            <Image style={styles.mejores} source={require('./src/img/restaurante.jpg')}/>
        </TouchableHighlight>
      </View>
      <View> 
        <TouchableHighlight onPress={()=>{setModalVisiblepiscina(!modalVisiblepiscina)}}>
            <Image style={styles.mejores} source={require('./src/img/piscina.jpg')}/>
        </TouchableHighlight>
      </View>
    </View>
    <Modal transparent={true} animationType="slide" visible={modalVisibleruta} onRequestClose={() => {alert('Modal has been closed.');
    }}>
    <View style={styles.vistaModel}>
    <View style={styles.Modal}>
    <Text style={styles.subtitulo}>Centros Comerciales</Text>
    <Text>Estamos ubicados cerca de centros comerciales populares del pais.</Text>
    <Button title="Cerrar" onPress={()=>{setModalVisibleruta(!modalVisibleruta)}}></Button>
    </View>
    </View>
    </Modal>
    <Modal transparent={true} animationType="slide" visible={modalVisiblelg} onRequestClose={() => {alert('Modal has been closed.');
    }}>
    <View style={styles.vistaModel}>
    <View style={styles.Modal}>
    <Text style={styles.subtitulo}>Parque de diversiones</Text>
    <Text>Estamos ubicados cerca de parque de diversiones populares.</Text>
    <Button title="Cerrar" onPress={()=>{setModalVisiblelg(!modalVisiblelg)}}></Button>
    </View>
    </View>
    </Modal>
    <Text style={styles.titulo}>Lugares cercanos</Text>
    <View style={styles.listado}>
      <View style={styles.listaItem}> 
        <TouchableHighlight onPress={()=>{setModalVisibleruta(!modalVisibleruta)}}>
            <Image style={styles.mejores} source={require('./src/img/centrocomercial.jpg')}/>
        </TouchableHighlight>
      </View>
      <View style={styles.listaItem}> 
        <TouchableHighlight onPress={()=>{setModalVisiblelg(!modalVisiblelg)}}>
            <Image style={styles.mejores} source={require('./src/img/parque.jpg')}/>
        </TouchableHighlight>
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
