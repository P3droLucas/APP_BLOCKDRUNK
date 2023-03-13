import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Image, TouchableOpacity, Platform, KeyboardAvoidingView, Modal} from 'react-native';
import {FontAwesome5}  from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




export default function EscolherApp() {


  const textsFacebook = [
    'Utilizar o Facebook em um estado ébrio é o equivalente a atravessar a rua sem olhar para os lados? \n#ficaadica', 
    'Utilizar o Facebook quando se estar embriagado é o equivalente a fazer roleta russa? \n#ficaadica', 
    'Deixando de utilizar o Facebook encachaçado é não deixar se humilhar!! \n#ficaadica', 
    'Utilizar o Facebook enquanto se esta ingerindo bebida alcoólica pode resultar em adicionar pessoas indesejadas! \n#ficaadica',
    'Existe um ditado que diz: Vale mais um app não utilizado do que dois postando besteira!! \n#ficaadica',
  ];
  const buttonFacebook = () => {
    const randomIndex = Math.floor(Math.random() * textsFacebook.length);
    const randomText = textsFacebook[randomIndex];
    Alert.alert('Voce Sabia?', randomText) 
    
  };

  const textsMessenger = [
    'Utilizar o Messenger em um estado ébrio é o equivalente a atravessar a rua sem olhar para os lados? \n#ficaadica', 
    'Utilizar o Messenger quando se estar embriagado é o equivalente a fazer roleta russa? \n#ficaadica', 
    'Deixando de utilizar o Messenger encachaçado é não deixar se humilhar!! \n#ficaadica', 
    'Utilizar o Messenger enquanto se esta ingerindo bebida alcoólica pode resultar em mensagens comprometedoras!! \n#ficaadica',
    'Existe um ditado que diz: Vale mais um app não utilizado do que dois postando besteira!! \n#ficaadica',
  ];
  const messengerButton = () => {
    const randomIndex = Math.floor(Math.random() * textsMessenger.length);
    const randomText = textsMessenger[randomIndex];
    Alert.alert('Voce Sabia?', randomText) 
    
  };
  
  const textsInstagram = [
    'Utilizar o Instagram em um estado ébrio é o equivalente a atravessar a rua sem olhar para os lados? \n#ficaadica', 
    'Utilizar o Instagram quando se estar embriagado é o equivalente a fazer roleta russa? \n#ficaadica', 
    'Deixando de utilizar o Instagram encachaçado é não deixar se humilhar!! \n#ficaadica', 
    'Utilizar o Instagram enquanto se esta ingerindo bebida alcoólica pode resultar em adicionar pessoas indesejadas! \n#ficaadica',
    'Existe um ditado que diz: Vale mais um app não utilizado do que dois postando besteira!! \n#ficaadica',
  ];
  const instagramButton = () => {
    const randomIndex = Math.floor(Math.random() * textsInstagram.length);
    const randomText = textsInstagram[randomIndex];
    Alert.alert('Voce Sabia?', randomText) 
    
  };

  const textsTwitter = [
    'Utilizar o Twitter em um estado ébrio é o equivalente a atravessar a rua sem olhar para os lados? \n#ficaadica', 
    'Utilizar o Twitter quando se estar embriagado é o equivalente a fazer roleta russa? \n#ficaadica', 
    'Deixando de utilizar o Twitter encachaçado é não deixar se humilhar!! \n#ficaadica', 
    'Utilizar o Twitter enquanto se esta ingerindo bebida alcoólica pode resultar em adicionar pessoas indesejadas! \n#ficaadica',
    'Existe um ditado que diz: Vale mais um app não utilizado do que dois postando besteira!! \n#ficaadica',
  ];
  const twitterButton = () => {
    const randomIndex = Math.floor(Math.random() * textsTwitter.length);
    const randomText = textsTwitter[randomIndex];
    Alert.alert('Voce Sabia?', randomText) 
    
  };
  
  const textsWhatsApp = [
    'Utilizar o WhatsApp em um estado ébrio é o equivalente a atravessar a rua sem olhar para os lados? \n#ficaadica', 
    'Utilizar o WhatsApp quando se estar embriagado é o equivalente a fazer roleta russa? \n#ficaadica', 
    'Deixando de utilizar o WhatsApp encachaçado é não deixar se humilhar!! \n#ficaadica', 
    'Utilizar o WhatsApp enquanto se esta ingerindo bebida alcoólica pode resultar em mensagens comprometedoras!! \n#ficaadica',
    'Existe um ditado que diz: Vale mais um app não utilizado do que dois postando besteira!! \n#ficaadica',
  ];
  const whatsappButton = () => {
    const randomIndex = Math.floor(Math.random() * textsWhatsApp.length);
    const randomText = textsWhatsApp[randomIndex];
    Alert.alert('Voce Sabia?', randomText) 
    
  };



  const navigation = useNavigation();
  const redirect = () => {
    navigation.navigate('Home');
  }
  
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding': 'height'}
    >
          
    <View style={styles.container}>
      <Text style={styles.cabecalhoText}>BlockDrunk</Text>
      <View style={styles.icones}>
        <TouchableOpacity style={styles.buttonIcone} onPress={buttonFacebook}>
          <FontAwesome5 name="facebook" size={50} color="#FFC963"  />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonIcone} onPress={messengerButton}>
          <FontAwesome5 name="facebook-messenger" size={50} color="#FFC963" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonIcone}onPress={instagramButton}>
          <FontAwesome5 name="instagram" size={50} color="#FFC963"/>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.buttonIcone}onPress={twitterButton}>
          <FontAwesome5 name="twitter" size={50} color="#FFC963"/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonIcone}onPress={whatsappButton}>
          <FontAwesome5 name="whatsapp" size={50} color="#FFC963"/>
        </TouchableOpacity>
      
    </View>
      <StatusBar backgroundColor='#E5E5E5' translucent={false} />
        <Image
          source={require('../../assets/tela2.png')}
          style={styles.logo}
          
        />

      
      <TouchableOpacity style={styles.button} onPress={redirect}>
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>

      
   
        

    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  cabecalhoText:{
    alignItems: 'center', 
    fontSize: 30,
    fontWeight:'bold',
    marginTop: Platform.OS === 'android'? '10%' : '20%',
    marginBottom: Platform.OS === 'android'? '10%' : '50%'
  },

  logo:{
    marginTop: Platform.OS === 'android'? '15%' : '5%',
    marginBottom: Platform.OS === 'android'? '15%' : '20%'
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
    marginBottom: '20%',
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
  icones:{
    flexDirection:'row',
    alignItems: 'center', 
    justifyContent:'space-between', 
    paddingHorizontal: 20,
        
  },

  buttonIcone:{
    flexDirection:'row',
    alignItems: 'center', 
    justifyContent:'space-between', 
    paddingHorizontal: 10,
        
  },

});
