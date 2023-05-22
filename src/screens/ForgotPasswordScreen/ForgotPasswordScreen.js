import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {

    const [username, setUsername] = useState('');
    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate('ResetPassword');
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');    
    }

    return (
        <View style={styles.root}>
            <Text style={styles.tittle}>Restablecer su contraseña</Text>

            {/*Ingreso de datos*/}
            <CustomInput
                placeholder='Usuario'
                value={username}
                setValue={setUsername}
            />

            {/*Botones*/}
            <CustomButton text='Enviar' onPress={onSendPressed} />
            
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