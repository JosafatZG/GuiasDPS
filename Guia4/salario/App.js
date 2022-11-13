/**
 * @format
 * @flow strict-local
 */
import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import colors from './src/utils/colors';
import Form from './src/components/Forms'
import Footer from './src/components/Footer';
import Result from './src/components/Result';
export default function App() {
  const [nombre, setNombre] = useState(null);
  const [salario, setSalario] = useState(null);
  const [total,setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(()=>{
    if(nombre&&salario)calculate();
    else reset();
  },[nombre,salario]);

  const calculate=()=>{
    reset();
    if(!nombre){
      setErrorMessage('Añada su nombre');
    }else if(!salario){
      setErrorMessage('Añade su salario base');
    }else{
      const isss = salario*0.03;
      const afp = salario*0.04;
      const renta = salario*0.05;
      setTotal({
      totalSalario:salario - (isss + afp + renta),
      });
    }
  };

  const reset =()=>{
    setErrorMessage('');
    setTotal(null);
  };

  return (
    <>
    <StatusBar barStyle="light-content"/>
    <SafeAreaView style={styles.Header}>
      <Text style={styles.HeadApp}>Cotizador de Prestamos</Text>
      <Form 
        setNombre={setNombre}
        setSalario={setSalario}
      />
    </SafeAreaView>
    <Result nombre={nombre} salario={salario} total = {total} errorMessage={errorMessage}/>
      <Footer calculate = {calculate}/>
    </>
  );
}

const styles = StyleSheet.create({
  Header:{
    backgroundColor:colors.PRIMARY_COLOR,
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center',
  },
  HeadApp:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',
    marginTop:15,
  },
  safeArea: {
height: 290,
alignItems: 'center',
},
background: {
backgroundColor: colors.PRIMARY_COLOR,
height: 200,
width: '100%',
borderBottomLeftRadius: 30,
borderBottomRightRadius: 30,
position: 'absolute',
zIndex: -1,
},
titleApp: {
fontSize: 25,
fontWeight: 'bold',
color: '#fff',
marginTop: 15,
},
});
