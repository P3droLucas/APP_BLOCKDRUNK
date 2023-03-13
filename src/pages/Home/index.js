import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';


 



export default function Home() {

  const navigation = useNavigation();
  const redirect = () => {
    navigation.navigate('BemVindo');
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
          
    <View style={styles.container}>
      <Text style={styles.cabecalhoText} >BlockDrunk</Text>
      <StatusBar backgroundColor='#E5E5E5' translucent={false} />
        <Image
          source={require('../../assets/telainicial.png')}
          style={styles.logo}
        />

      <Text style={styles.rodapeText}>Frases desmotivacionais para você ter tempo para pensar antes de sair usando apps enquanto está embriagado....</Text>
      <TouchableOpacity style={styles.button} onPress={redirect}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>


    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },

  cabecalhoText:{
    alignItems: 'center', 
    fontSize: 30,
    fontWeight:'bold',
  },

  logo:{
    marginTop: Platform.OS === 'android'? '7%' : '60%',
    marginBottom: Platform.OS === 'android'? '7%' : '10%'
  },
  rodapeText:{
    alignItems: 'center', 
    justifyContent: 'center',
    textAlign:'center',
    fontSize: 15,
    fontWeight:'bold',

  },

  button:{
    marginTop: '5%',
    marginBottom: '13%',
    backgroundColor: '#FFC963', 
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 5,

  },

  buttonText:{
    color:'#000000', 
    fontSize: 17,
    fontWeight:'bold',
  },
  

});
