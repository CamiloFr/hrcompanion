import React, { Component } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import firebase from './../databases/firebase';

class RRHH extends Component {
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
    componentDidMount() {
        console.log('mounted');
        firebase.db.collection('users').onSnapshot(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
                let { password } = doc.data();
                let array = [];
                array.push({name:doc.id, password:password});
                this.setState({
                    users: array
                })
            });
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
                </View>
            </ScrollView>
        )
    }
}

export default RRHH;
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