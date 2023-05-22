import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';


const SingUpScreen = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const navigation = useNavigation();


    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail');
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
                placeholder='Nombre de Usuario'
                value={username}
                setValue={setUsername}
            />
            <CustomInput
                placeholder='Correo Electronico'
                value={email}
                setValue={setEmail}
            />
            <CustomInput
                placeholder='Contrasena'
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            <CustomInput
                placeholder='Repita la Contrasena'
                value={passwordRepeat}
                setValue={setPasswordRepeat}
                secureTextEntry
            />

            {/*Botones*/}
            <CustomButton text='Registrar' onPress={onRegisterPressed} />
            <Text style={styles.text}>
            Al registrarse, confirma que acepta nuestros 
            <Text style={styles.link} onPress={onTermsOfUsePressed}> Términos de uso </Text> 
            y <Text style={styles.link} onPress={onPrivacyPressed}>Política de privacidad.</Text>
            </Text>
            <CustomButton text='Tiene cuenta? Inicie Sesion' onPress={onSignInPressed} type='TERTIARY'/>
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