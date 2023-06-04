import React, {useState} from 'react';
import { View, Image, StyleSheet, useWindowDimensions, Alert } from 'react-native';
import Logo from '../../../assets/images/logoUE.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const SignInScreen = () => {

  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading]= useState(false);

  const {
    control, 
    handleSubmit, 
    formState: {errors},
  } = useForm();

  const onSignInPressed = async data => {
    if(loading){
      return;
    }
    
    setLoading(true);
    
    try{
      const response = await Auth.signIn(data.email, data.password);
      console.log(response);
      navigation.navigate('Home');
    }catch(e){
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.root}>
      <Image 
        source={Logo} 
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode='contain'
        />

        {/*Ingreso de datos*/}
        <CustomInput 
          name='email'
          placeholder='Correo Electrónico' 
          control={control}
          rules={{required: 'El correo electronico es obligatorio'}}
        />
        <CustomInput 
          name='password'
          placeholder='Contrasena' 
          secureTextEntry
          control={control}
          rules={{
            required: 'La contrasena es obligatorio', 
            minLength: {
              value: 6,
              message: 'El minimo de caracteres para la contrasena son 6'
            }}}
        />

        {/*Botones*/}
        <CustomButton 
        text={loading ? 'Cargando... ' : 'Iniciar Sesion'} 
        onPress={handleSubmit(onSignInPressed)}/>
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

export default SignInScreen;