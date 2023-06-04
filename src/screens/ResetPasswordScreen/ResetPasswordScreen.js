import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ResetPasswordScreen = () => {
    const { control, handleSubmit} = useForm();
    const navigation = useNavigation();

    const onSubmitPressed = async(data) => {
        try{
            await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
            navigation.navigate('SignIn');
        }catch(e){
            Alert.alert('Oops', e.message);
        }
        
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.root}>
            <Text style={styles.tittle}>Restablecer su contraseña</Text>

            {/*Ingreso de datos*/}
            <CustomInput
                name='username'
                placeholder='Correo'
                control={control}
                rules={{required: 'Correo requerido'}}
            />

            <CustomInput
                name='code'
                placeholder='Codigo'
                control={control}
                rules={{required: 'Codigo requerido'}}
            />

            <CustomInput
                name='password'
                placeholder='Nueva Contrasena'
                control={control}
                secureTextEntry
                rules={{
                    required: 'La contrasena es obligatorio',
                    minLength: {
                        value: 6,
                        message: 'El minimo de caracteres para la contrasena son 6'
                    }}}
            />

            {/*Botones*/}
            <CustomButton text='Confirmar' onPress={handleSubmit(onSubmitPressed)} />
            
            <CustomButton text='Volver para Iniciar Sesión' onPress={onSignInPressed} type='TERTIARY'/>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    tittle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
});

export default ResetPasswordScreen;