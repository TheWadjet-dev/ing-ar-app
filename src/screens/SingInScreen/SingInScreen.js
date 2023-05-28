import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/logoUE.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SingInScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  
  const onSignInPressed = () => {
    navigation.navigate('Home');
  }

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  }

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.root}>
      <Image 
        source={Logo} 
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode='contain'
        />

        {/*Ingreso de datos*/}
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

        {/*Botones*/}
        <CustomButton text='Iniciar Sesion' onPress={onSignInPressed}/>
        <CustomButton text='Olvido su contrasena?' onPress={onForgotPasswordPressed} type='TERTIARY'/>
        <CustomButton text='Registrese aqui' onPress={onSignUpPressed} type='TERTIARY'/>
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