import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
const Pais = ({ resultado }) => {
const [info,setinfo]=useState([]);
const [nombre,setnombre]=useState();
const [capital,setcapital]=useState();
const [region,setregion]=useState();
const [lengua,setlengua]=useState([]);
const [area, setarea]=useState([]);
const [bandera, setbandera]=useState([]);
useEffect(() => {
  setinfo(resultado);
  lengua.length =0;
  Object.values(info).map(e => {
    setnombre(e.nome.abreviado);
    setcapital(e.governo.capital.nome);
    setregion(e.localizacao.regiao.nome);
    setarea((e.area.total)*1000000);
    if(nombre==="Argentina"){
      setbandera(require('../src/img/argentina.png'));
    }else if(nombre==="El Salvador"){
      setbandera(require('../src/img/elsalvador.png'));
    }else if(nombre==="Canadá"){
      setbandera(require('../src/img/canada.png'));
    }else if(nombre==="Guatemala"){
      setbandera(require('../src/img/guatemala.png'));
    }else if(nombre==="Honduras"){
      setbandera(require('../src/img/honduras.png'));
    }else if(nombre==="Nicaragua"){
      setbandera(require('../src/img/nicaragua.png'));
    }else if(nombre==="Panamá"){
      setbandera(require('../src/img/panama.png'));
    }else if(nombre==="Costa Rica"){
      setbandera(require('../src/img/costarica.png'));
    }else if(nombre==="México"){
      setbandera(require('../src/img/mexico.png'));
    }else if(nombre==="Estados Unidos da América"){
      setbandera(require('../src/img/estadosunidos.png'));
    }else if(nombre==="Colômbia"){
      setbandera(require('../src/img/colombia.png'));
    }else if(nombre==="Espanha"){
      setbandera(require('../src/img/espana.png'));
    }else if(nombre==="Peru"){
      setbandera(require('../src/img/peru.png'));
    }
    Object.values(e.linguas).map(l=>{
      lengua.push(l.nome)
    })
  }
);
});
return (
<Card>
  <Card.Title>{nombre}</Card.Title>
  <Card.Divider />
  <View style={{ justifyContent: 'center' }}>
    <Text>Capital: {capital}</Text>
    <Text>Region: {region}</Text>
    <Text>Lengua: {lengua.toString()}</Text>
    <Text>Area: {area.toString()} m2</Text>
    <Image style={styles.img} source={bandera}/>
  </View>
</Card>
);
};

const styles = StyleSheet.create({
  img:{
    width:150,
    height:150,
    align:'center',
    //borderRadius:200,
    borderColor:'#d35647',
    resizeMode:'contain',
    margin:8
  }
})
export default Pais;