import React from 'react';
import clientAxios from './../config/axios';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import Msgerrors from './components/Msgerrors';
import styles from './Stylesheet';

class Register extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name:'',
            password:'',
            password2:'',
            image:'',
            type:'',
            errorfielduser: false,
        }
    }
    TypeUser(data) {
        this.setState(state => ({
            [data.textinput]: data.data
        }))
    }
    ValidateUserNew(data){
        if (data.name.trim() === '' || data.password.trim() === '' || data.password2.trim() === '') {
            return alert('Todos los campos son obligatorios');
        }

        if (data.password.trim() !== data.password2.trim()){
            return alert('Las contraseñas no coinciden');
        }

        let image = `https://source.unsplash.com/random/200x200?sig=${(Math.random().toFixed(2)*100).toString()}`
        clientAxios.post('/api/users', { 'id':data.name, 'password':data.password, 'photo':image, 'curriculum': false, 'type': 'USER'})
        .then(data => {
            console.log(data);
            this.props.navigation.navigate('Home');
        })
        .catch(err => {
            console.error(err);
            return this.setState({ errorfielduser: true, msjerror: err.response.data.msg })

        })

        // NUMERO AL AZAR PARA OBTENER IMAGENES PARA LOS USUARIOS
        // Math.random().toFixed(2)*100
        // https://source.unsplash.com/random/200x200?sig=1
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
                                style={styles.input}
                                onChangeText={data => { this.TypeUser({textinput:'name', data:data}) }}
                            />
                        </View>
                        <View style={styles.contentinputlogin}>
                            <Text>Contraseña</Text>
                            <TextInput
                                secureTextEntry={true}
                                style={styles.input}
                                onChangeText={data => { this.TypeUser({textinput:'password', data:data}) }}
                            />
                        </View>
                        <View style={styles.contentinputlogin}>
                            <Text>Repita contraseña</Text>
                            <TextInput
                                secureTextEntry={true}
                                style={styles.input}
                                onChangeText={data => { this.TypeUser({textinput:'password2', data:data}) }}
                            />
                        </View>
                        <View style={styles.contentinputlogin}>
                            <Button
                                title="Registrar"
                                onPress={() => {this.ValidateUserNew(this.state)}}
                            ></Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Register;