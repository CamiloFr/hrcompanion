import React, { Component } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import firebase from '../databases/firebase';

class ScreenForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            users:[],
        };
        this.changesUsers = this.handleStatusChange.bind(this);
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
    componentDidUpdate() {
        console.log('update');
    }
    componentWillUnmount() {
        console.log('unmount');
    }
    handleStatusChange(status) {
        this.setState(users => this.state.users);
    }
    componentDidUpdate() {
        console.log(this.state.users);
      }
    render() {
        return (
            <ScrollView
                style={styles.container}
            >
                {
                    this.state.users.map((l, i) => (
                        <ListItem key={i} bottomDivider>
                            <Avatar source={{uri: l.image}} />
                            <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                            <ListItem.Subtitle>{l.password}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </ScrollView>
        )
    }
}

export default ScreenForm;
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