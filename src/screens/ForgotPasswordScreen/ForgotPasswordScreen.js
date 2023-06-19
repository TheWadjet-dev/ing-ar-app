import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ForgotPasswordScreen = () => {

    const { control, handleSubmit} = useForm();
    const navigation = useNavigation();

    const onSendPressed = async(data) => {
        try{
            await Auth.forgotPassword(data.username);
            navigation.navigate('ResetPassword');
        }catch(e){
            Alert.alert('Oops', e.message);
        }
        
        //
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
                rules={{required: 'Correo obligatorio'}}
            />

            {/*Botones*/}
            <CustomButton text='Enviar' onPress={handleSubmit(onSendPressed)} />
            
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

export default ForgotPasswordScreen;