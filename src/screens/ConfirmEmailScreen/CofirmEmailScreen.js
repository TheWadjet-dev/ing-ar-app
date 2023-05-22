import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {

    const [code, setCode] = useState('');
    const navigation = useNavigation();



    const onConfirmPressed = () => {
        navigation.navigate('Home');
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    const onResendPressed = () => {
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
                placeholder='Código de Confirmación'
                value={code}
                setValue={setCode}
            />

            {/*Botones*/}
            <CustomButton text='Confirmar' onPress={onConfirmPressed} />
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