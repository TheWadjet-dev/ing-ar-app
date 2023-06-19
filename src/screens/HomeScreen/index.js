{/* Importamos librerias */}
import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import {Auth} from 'aws-amplify';
import { ViroARScene, ViroText, ViroTrackingStateConstants, ViroARSceneNavigator } from '@viro-community/react-viro';

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

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}/>
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}/>
  );
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