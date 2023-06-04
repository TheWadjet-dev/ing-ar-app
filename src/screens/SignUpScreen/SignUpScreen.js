import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#%&´*+/=?^_`{|}-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SingUpScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('password');
    const navigation = useNavigation();

    const onRegisterPressed = async(data) => {
        const {name, password, username, family_name} = data;
        //console.log(data);
        try{
            const response = await Auth.signUp({
                username,
                password,
                attributes:{name, family_name, preferred_username: username},
            });
            navigation.navigate('ConfirmEmail', {username});
        }catch(e){
            Alert.alert('Oops', e.message);
        }
        
        //
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    const onTermsOfUsePressed = () => {
        console.warn("Terminos de Uso")
    }

    const onPrivacyPressed = () => {
        console.warn("Politica de Privacidad")
    }

    return (
        <View style={styles.root}>
            <Text style={styles.tittle}>Crear una Cuenta</Text>

            {/*Ingreso de datos*/}
            <CustomInput
                name='name'
                placeholder='Nombre'
                control={control}
                rules={{ required: 'El nombres es obligatorio' }}
            />
            <CustomInput
                name='family_name'
                placeholder='Apellido'
                control={control}
                rules={{ required: 'El apellido es obligatorio' }}
            />
            <CustomInput
                name='username'
                placeholder='Correo Electronico'
                control={control}
                rules={{ 
                    required: 'Correo electronico obligatorio',
                    pattern: { value: EMAIL_REGEX, message: 'Correo invalido' } }}
            />
            <CustomInput
                name='password'
                placeholder='Contraseña'
                secureTextEntry
                control={control}
                rules={{
                    required: 'La contrasena es obligatorio',
                    minLength: {
                        value: 6,
                        message: 'El minimo de caracteres para la contrasena son 6'
                    }
                }}
            />
            <CustomInput
                name='passwordRepeat'
                placeholder='Repita la Contraseña'
                secureTextEntry
                control={control}
                rules={{
                    validate: value => 
                    value === pwd || 'Las contrasenas no son similares',
                }}
            />

            {/*Botones*/}
            <CustomButton text='Registrar' onPress={handleSubmit(onRegisterPressed)} />
            <Text style={styles.text}>
                Al registrarse, confirma que acepta nuestros
                <Text style={styles.link} onPress={onTermsOfUsePressed}> Términos de uso </Text>
                y <Text style={styles.link} onPress={onPrivacyPressed}>Política de privacidad.</Text>
            </Text>
            <CustomButton text='Tiene cuenta? Inicie Sesion' onPress={onSignInPressed} type='TERTIARY' />
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

export default SingUpScreen;