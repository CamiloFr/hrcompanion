import React, { Component, useContext } from 'react';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import firebase from './../databases/firebase';
import { connect } from 'react-redux';
import * as actions from './../actions';
import styles from './Stylesheet';
import Msgerrors from './components/Msgerrors';

class InitialScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name:'',
            password:'',
            errorfielduser: false,
            msjerror: '',
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
        if (data.name.trim() === '' || data.password.trim() === '') {
            return this.setState({ errorfielduser: true, msjerror: 'Todos los campos son obligatorios' });
        }

        this.setState({ errorfielduser: false });

        let campos = data;
        
        firebase.db.collection('users').doc(data.name).get()
        .then(data => { 
            if (!data.exists) {
                this.setState(state => ({
                    name: '',
                    password: '',
                }));
                return this.setState({ errorfielduser: true, msjerror: 'No existe usuario' });;
            }

            let datos = data.data();
            if (datos.password !== campos.password) {
                return this.setState({ errorfielduser: true, msjerror: 'Contraseña incorrecta' });
            }
            

            this.props.user_change({id: data.id, curriculum: datos.curriculum});

            this.setState({name: '', password:''});

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
        console.log(this.props);
        return (
            <ScrollView
                style={styles.container}
            >
                <View style={styles.containercontent}>
                    <View style={styles.contentlogin}>
                        {
                            this.state.errorfielduser
                            ?
                                <Msgerrors error={this.state.msjerror}></Msgerrors>
                            :
                                null
                        }
                        <View style={styles.contentinputlogin}>
                            <Text>Usuario</Text>
                            <TextInput
                                onChangeText={data => { this.TypeUser({textinput:'name', data:data}) }}
                                value={this.state.name}
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.contentinputlogin}>
                            <Text>Contraseña</Text>
                            <TextInput
                                secureTextEntry={true}
                                onChangeText={data => { this.TypeUser({textinput:'password', data:data}) }}
                                value={this.state.password}
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.contentinputlogin}>
                            <Button
                                title="Iniciar Sesion"
                                color="#459b37"
                                onPress={() => {this.ValidateUser(this.state)}}
                            ></Button>
                        </View>
                        <View style={styles.contentinputlogin}>
                            <Button
                                title="Registrarse"
                                color="#0096d2"
                                onPress={() => {this.props.navigation.navigate('Register')}}
                            ></Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {user: state.user}
}

export default connect(mapStateToProps, actions)(InitialScreen);