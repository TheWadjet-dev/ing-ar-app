import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ConfirmEmailScreen = () => {
    const route = useRoute();
    const { control, handleSubmit} = useForm({
        defaultValues: {username: route?.params?.username}
    });

    //const username = watch('username');

    const navigation = useNavigation();

    const onConfirmPressed = async data => {
        try{
            await Auth.confirmSignUp(data.username, data.code);
            navigation.navigate('SignIn');
        }catch(e){
            Alert.alert('Oops', e.message);
        }      
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    const onResendPressed = async () => {
        try{
            await Auth.resendSignUp(username);
            Alert.alert('Se reenvio el codigo a tu correo')
        }catch(e){
            Alert.alert('Oops', e.message);
        }
        console.warn("Reenviar Codigo")
    }

    const onPrivacyPressed = () => {
        console.warn("Politica de Privacidad")
    }

    return (
        <View style={styles.root}>
            <Text style={styles.tittle}>Confirme su correo electronico</Text>

            {/*Ingreso de datos*/}
            <CustomInput
                name='username'
                placeholder='Correo'
                control={control}
                rules={{required: 'Codigo requerido'}}
            />

            <CustomInput
                name='code'
                placeholder='Código de Confirmación'
                control={control}
                rules={{required: 'Codigo requerido'}}
            />

            {/*Botones*/}
            <CustomButton text='Confirmar' onPress={handleSubmit(onConfirmPressed)} />
            <CustomButton text='Reenviar Código' onPress={onResendPressed} type='SECONDARY'/>
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

export default ConfirmEmailScreen;