import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';


const SingInScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  

  return (
    <View style={styles.root}>
      <Image 
        source={Logo} 
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode='contain'/>

        <CustomInput 
          placeholder='Nombre de Usuario' 
          value={username} 
          setValue={setUsername}
        />
        <CustomInput 
          placeholder='Contrasena' 
          value={password} 
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '50%',
    maxWidth: 300,
    maxHeight: 300,
  },
});

export default SingInScreen;