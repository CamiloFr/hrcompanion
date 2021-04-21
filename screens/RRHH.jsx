import React, { Component } from 'react';
import { Button, ScrollView, StyleSheet, View, TextInput, Text } from 'react-native';
import firebase from './../databases/firebase';
import { connect } from 'react-redux';
import FormCurriculum from './FormCurriculum';


class RRHH extends Component {
    render() {
        console.log(this.props);
        console.log(this.props.user.curriculum);
        return (
            <ScrollView
                style={styles.container}
            >
                <View style={{ display:'flex', width:'100%', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{ display:'flex', width:'80%', marginTop:'' }}>
                        <Text>Nombres</Text>
                        <TextInput
                            // style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Nombres"
                        />
                    </View>
                    <View style={{ display:'flex', width:'80%', marginTop:'' }}>
                        <Text>Apellidos</Text>
                        <TextInput
                            // style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Apellidos"
                        />
                    </View>
                    <View style={{ display:'flex', width:'80%', marginTop:'' }}>
                        <Text>Identificación</Text>
                        <TextInput
                            // style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Identificación"
                        />
                    </View>
                    <View style={{ display:'flex', width:'80%', marginTop:'' }}>
                        <Text>Tipo</Text>
                        <TextInput
                            // style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Tipo"
                        />
                    </View>
                    <View style={{ display:'flex', width:'80%', marginTop:'' }}>
                        <Text>Genero</Text>
                        <TextInput
                            // style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Genero"
                        />
                    </View>
                    <View style={{ display:'flex', width:'80%', marginTop:'' }}>
                        <Text>Estado Civil</Text>
                        <TextInput
                            // style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Estado Civil"
                        />
                    </View>
                    <View style={{ display:'flex', width:'80%', marginTop:'' }}>
                        <Text>Teléfono</Text>
                        <TextInput
                            // style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Teléfono"
                        />
                    </View>
                    <View style={{ display:'flex', width:'80%', marginTop:'' }}>
                        <Text>Pais</Text>
                        <TextInput
                            // style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Pais"
                        />
                    </View>
                    <View style={{ display:'flex', width:'80%', marginTop:'' }}>
                        <Text>Departamento</Text>
                        <TextInput
                            // style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Departamento"
                        />
                    </View>
                    <View style={{ display:'flex', width:'80%', marginTop:'' }}>
                        <Text>Ciudad</Text>
                        <TextInput
                            // style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Ciudad"
                        />
                    </View>
                    <View style={{ display:'flex', width:'80%', marginTop:'' }}>
                        <Text>Dirección</Text>
                        <TextInput
                            // style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Dirección"
                        />
                    </View>
                    <View style={{ display:'flex', width:'80%', marginTop:'' }}>
                        <Text>Perfil Profesional</Text>
                    </View>
                    <View style={{ display:'flex', width:'80%', marginTop:'' }}>
                        <Text>Titulo</Text>
                        <TextInput
                            // style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Titulo"
                        />
                    </View>
                    <View style={{ display:'flex', width:'80%', marginTop:'' }}>
                        <Text>Descripción de su perfil</Text>
                        <TextInput
                            // style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Descripcion"
                        />
                    </View>
                    <View style={{ display:'flex', width:'80%', marginTop:'' }}>
                        <Button 
                            title="Registrar"
                        ></Button>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.user }
}

export default connect(mapStateToProps)(RRHH);
// StyleSheet 

const styles = StyleSheet.create({
    input: {
        width: '80%',
        paddingTop: 30,
        padding: 10,
    },
  });