{/* Importamos librerias */}
import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import {Auth} from 'aws-amplify';

const index = () => {
  const signOut = () => {
    Auth.signOut();
  };
  

  const HelloWorldSceneAR = () => {
    const[text, setText] = useState('Inicializando AR...');
  }

  function onInitialized(state, reason){
    console.log('guncelleme', state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL){
      setText('Hello World!');
    }else if(state=== ViroTrackingStateConstants.TRACKING_UNAVAILABLE){

    }
  }
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});