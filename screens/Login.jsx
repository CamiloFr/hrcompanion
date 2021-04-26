import React from 'react';
import { connect } from 'react-redux';
import clientAxios from './../config/axios';
import Msgerrors from './components/Msgerrors';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import * as actions from './../actions';
import styles from './Stylesheet';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name:'',
            password:'',
            errorfielduser: false,
            msjerror: '',
        }
    }
    TypeUser(data) {
        this.setState(state => ({
            [data.textinput]: data.data
        }))
    }
    ValidateUser(data){
        // console.log(this.props, navigation);
        if (data.name.trim() === '' || data.password.trim() === '') {
            return this.setState({ errorfielduser: true, msjerror: 'Todos los campos son obligatorios' });
        }

        this.setState({ errorfielduser: false });
        
        clientAxios.post('/api/auth', { 'id':data.name, 'password': data.password })
        .then(data => {
            let {  id, curriculum, type, photo } = data.data;
            this.props.user_change({id: id, curriculum: curriculum, type: type, photo: photo});
            this.setState({name: '', password:''});

            this.props.navigation.navigate('Curriculum');
        })
        .catch(error => {
            console.error(error);
            this.setState(state => ({
                name: '',
                password: '',
            }));
            return this.setState({ errorfielduser: true, msjerror: error });
        })
    }
    render() {
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
                                color="#4a8957"
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
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, actions)(Login);