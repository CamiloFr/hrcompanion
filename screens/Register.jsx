import React, { Component } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import firebase from './../databases/firebase';

class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name:'',
            password:'',
            password2:'',
            image:'',
            type:'',
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
    ValidateUserNew(data){
        console.log(data);
        let datos = data;
        if (data.name.trim() === '' || data.password.trim() === '' || data.password2.trim() === '') {
            return alert('Todos los campos son obligatorios');
        }

        if (data.password.trim() !== data.password2.trim()){
            return alert('Las contraseñas no coinciden');
        }
        
        firebase.db.collection('users').doc(data.name).get()
        .then(data => { 
            console.log(data);
            if (!data.exists) {
                firebase.db.collection('users').doc(datos.name).set({password: datos.password, image:'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/123.jpg', user:'USER'});
                this.props.navigation.navigate('Home');
            } else {
                alert('Este nombre de usuario ya existe');
            }
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
                        <TextInput
                            placeholder="Repite contraseña"
                            onChangeText={data => { this.TypeUser({textinput:'password2', data:data}) }}
                            style={styles.input}
                        ></TextInput>
                    </View>
                    <View>
                        <Button
                            title="Registrar"
                            onPress={() => {this.ValidateUserNew(this.state)}}
                        ></Button>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Register;
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