import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';


const ResetPasswordScreen = () => {

    const [code, setCode] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const navigation = useNavigation();

    const onSubmitPressed = () => {
        navigation.navigate('Home');
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.root}>
            <Text style={styles.tittle}>Restablecer su contraseña</Text>

            {/*Ingreso de datos*/}
            <CustomInput
                placeholder='Codigo'
                value={code}
                setValue={setCode}
            />
            {/*Ingreso de datos*/}
            <CustomInput
                placeholder='Nueva Contrasena'
                value={newpassword}
                setValue={setNewPassword}
            />

            {/*Botones*/}
            <CustomButton text='Confirmar' onPress={onSubmitPressed} />
            
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