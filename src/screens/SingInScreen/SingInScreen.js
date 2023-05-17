import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/logo.png';

const SingInScreen = () => {
  const {height} = useWindowDimensions();

  return (
    <View>
      <Image 
        source={Logo} 
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode='contain'/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    alignItems: 'center',
    width: '50%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SingInScreen;