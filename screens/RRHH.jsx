import React, { Component } from 'react';
import { CheckBox, Button, ScrollView, View, TextInput, Text } from 'react-native';
// import { CheckBox } from 'react-native-elements'
import firebase from './../databases/firebase';
import Msgerrors from './components/Msgerrors';
import { connect } from 'react-redux';
import styles from './Stylesheet';


class RRHH extends Component {
    constructor (props) {
        super(props);
        this.state = {
            names:'',
            surnames:'',
            iden:'',
            typeiden:'',
            telephone:'',
            man: false,
            girl: false,
            single: false,
            separate: false,
            married: false,
            widower: false,
            country: '',
            department:'',
            city:'',
            direction:'',
            title:'',
            description:'',
            error: false,
            msjerror: '',
        }
    }
    componentDidMount(){
        if(this.props.user.curriculum) {
            this.setState({errornames:false, msjerror:'Ya esta diligenciado'});
        }
    }
    ValidarFormRRHH(data){
        console.log(data);
        if (data.names.trim() === '' ||  data.surnames === ''){
            return this.setState({errornames:true, msjerror:'Faltan nombres o apellidos'});
        }

        if (data.iden.trim() === '' || data.typeiden.trim() === '') {
            return this.setState({errornames:true, msjerror:'Falta identificacion y tipo de identificación'});
        }

        if (data.man === false && data.girl === false) {
            return this.setState({errornames:true, msjerror:'Falta sexo'});
        }

        if (data.single === false && data.married === false && data.separate === false && data.windowe === false) {
            return this.setState({errornames:true, msjerror:'Falta estado civil'});
        }

        if (data.telephone.trim() === '') {
            return this.setState({errornames:true, msjerror:'Falta telefono'});
        }

        if (data.country.trim() === '') {
            return this.setState({errornames:true, msjerror:'Falta pais'});
        }

        if (data.department.trim() === '') {
            return this.setState({errornames:true, msjerror:'Falta departamento'});
        }

        if (data.city.trim() === '') {
            return this.setState({errornames:true, msjerror:'Falta ciudad'});
        }

        if (data.direction.trim() === '') {
            return this.setState({errornames:true, msjerror:'Falta direccion'});
        }

        this.setState({errornames:false, msjerror:''});
    }
    TypeUser(data) {
        this.setState(state => ({
            [data.textinput]: data.data
        }))
    }
    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView
                    style={{ height: '90vh' }}
                    style={styles.container}
                >
                    {
                        this.props.user.curriculum
                        ?
                            <Msgerrors error={this.state.msjerror}></Msgerrors>
                        :
                            null
                    }
                    {
                        this.state.errornames
                        ?
                            <Msgerrors error={this.state.msjerror}></Msgerrors>
                        :
                            null
                    }
                    <View style={styles.content}>
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            >Nombres *</Text>
                            <TextInput
                                style={styles.inputrrhh}
                                onChangeText={data => { this.TypeUser({textinput:'names', data:data}) }}
                                placeholder="Nombres"
                            />
                        </View>
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            >Apellidos *</Text>
                            <TextInput
                                style={styles.inputrrhh}
                                onChangeText={data => { this.TypeUser({textinput:'surnames', data:data}) }}
                                placeholder="Apellidos"
                            />
                        </View>
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            >Identificación *</Text>
                            <TextInput
                                style={styles.inputrrhh}
                                onChangeText={data => { this.TypeUser({textinput:'iden', data:data}) }}
                                placeholder="Identificación"
                            />
                        </View>
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            >Tipo *</Text>
                            <TextInput
                                style={styles.inputrrhh}
                                onChangeText={data => { this.TypeUser({textinput:'typeiden', data:data}) }}
                                placeholder="Tipo"
                            />
                        </View>
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            >Genero *</Text>
                            <CheckBox
                                value={this.state.man}
                                onValueChange={() => this.setState({ man: !this.state.man })}
                            />
                            <Text
                                style={styles.textrrhh}
                            >Masculino</Text>
                            <CheckBox
                                value={this.state.girl}
                                onValueChange={() => this.setState({ girl: !this.state.girl })}
                            />
                            <Text
                                style={styles.textrrhh}
                            >Femenino</Text>
                        </View>
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            >Estado Civil *</Text>
                            <CheckBox
                                value={this.state.single}
                                onValueChange={() => this.setState({ single: !this.state.single })}
                            />
                            <Text
                                style={styles.textrrhh}
                            >Soltero</Text>
                            <CheckBox
                                value={this.state.married}
                                onValueChange={() => this.setState({ married: !this.state.married })}
                            />
                            <Text
                                style={styles.textrrhh}
                            >Casado</Text>
                        </View>
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            ></Text>
                            <CheckBox
                                value={this.state.separate}
                                onValueChange={() => this.setState({ separate: !this.state.separate })}
                            />
                            <Text
                                style={styles.textrrhh}
                            >Separado</Text>
                            <CheckBox
                                value={this.state.widower}
                                onValueChange={() => this.setState({ widower: !this.state.widower })}
                            />
                            <Text
                                style={styles.textrrhh}
                            >Viudo</Text>
                        </View>
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            >Teléfono *</Text>
                            <TextInput
                                style={styles.inputrrhh}
                                onChangeText={data => { this.TypeUser({textinput:'telephone', data:data}) }}
                                placeholder="Teléfono"
                            />
                        </View>
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            >Pais *</Text>
                            <TextInput
                                style={styles.inputrrhh}
                                onChangeText={data => { this.TypeUser({textinput:'country', data:data}) }}
                                placeholder="Pais"
                            />
                        </View>
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            >Departamento *</Text>
                            <TextInput
                                style={styles.inputrrhh}
                                onChangeText={data => { this.TypeUser({textinput:'department', data:data}) }}
                                placeholder="Departamento"
                            />
                        </View>
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            >Ciudad *</Text>
                            <TextInput
                                style={styles.inputrrhh}
                                onChangeText={data => { this.TypeUser({textinput:'city', data:data}) }}
                                placeholder="Ciudad"
                            />
                        </View>
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            >Dirección *</Text>
                            <TextInput
                                style={styles.inputrrhh}
                                onChangeText={data => { this.TypeUser({textinput:'direction', data:data}) }}
                                placeholder="Dirección"
                            />
                        </View>
                        <View style={styles.contentinputrrhh}>
                            <Text>Perfil Profesional</Text>
                        </View>
                        <View
                            style={{
                                margin: '1%',
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                            }}
                        />
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            >Titulo</Text>
                            <TextInput
                                style={styles.inputrrhh}
                                onChangeText={data => { this.TypeUser({textinput:'title', data:data}) }}
                                placeholder="Titulo"
                            />
                        </View>
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            >Descripción de su perfil</Text>
                            <TextInput
                                style={styles.inputrrhh}
                                onChangeText={data => { this.TypeUser({textinput:'description', data:data}) }}
                                placeholder="Descripcion"
                            />
                        </View>
                        <View style={styles.contentinputlogin}>
                            <Button 
                                title="Registrar"
                                color="#459b37"
                                onPress={()=>{this.ValidarFormRRHH(this.state)}}
                            ></Button>
                        </View>
                    </View>
                </ScrollView>
                <View 
                    style={{ width: '10vh', position: 'absolute'}}
                >
                    <Button
                        title="Hoteles"
                    ></Button>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.user }
}

export default connect(mapStateToProps)(RRHH);