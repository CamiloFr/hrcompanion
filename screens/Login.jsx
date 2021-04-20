import React, { useState, Component } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import firebase from './../databases/firebase';

class InitialScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name:'',
            password:'',
        }
    }
    AddUser(e) {
        alert('Lo he presionado');
    }
    TypeUser(data) {
        this.setState(state => ({
            [data.textinput]: data.data
        }))
    }
    ValidateUser(data){
        console.log(data);
        if (data.name.trim() === '' || data.password.trim() === '') {
            return alert('Todos los campos son obligatorios');
        }

        let campos = data;
        
        firebase.db.collection('users').doc(data.name).get()
        .then(data => { 
            console.log(data);
            if (!data.exists) {
                this.setState(state => ({
                    name: '',
                    password: '',
                }));
                return alert('No existe usuario');
            }

            let datos = data.data();
            console.log(datos);
            if (datos.password !== campos.password) {
                return alert('Contraseñas no coinciden');
            }
            
            if (datos.user.trim() === 'ADMI') {
                return this.props.navigation.navigate('HomeScreen');
            }

            this.props.navigation.navigate('RRHH');
        })
        .catch(err => {
            console.error(err);
        })
    }
    render() {
        return (
            <ScrollView
                style={styles.container}
            >
                <View style={styles.content}>
                    <View>
                        <TextInput
                            placeholder="Correo electronico"
                            onChangeText={data => { this.TypeUser({textinput:'name', data:data}) }}
                            style={styles.input}
                        ></TextInput>
                    </View>
                    <View>
                        <TextInput
                            placeholder="Contraseña"
                            onChangeText={data => { this.TypeUser({textinput:'password', data:data}) }}
                            style={styles.input}
                        ></TextInput>
                    </View>
                    <View>
                        <Button
                            title="Iniciar Sesion"
                            onPress={() => {this.ValidateUser(this.state)}}
                        ></Button>
                    </View>
                    <View>
                    <Button
                            title="Registrarse"
                            onPress={() => {this.props.navigation.navigate('Register')}}
                        ></Button>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default InitialScreen;
// StyleSheet 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ece6da',
    },
    content:{
        height:'100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        paddingTop: 30,
        padding: 10,
    },
  });