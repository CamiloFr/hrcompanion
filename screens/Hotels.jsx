import React, { Component } from 'react'
import { View, Button, ScrollView, TextInput, Text } from 'react-native';
import NavigationBar from './components/NavigationBar'
import styles from './Stylesheet';
import clientAxios from './../config/axios';

class Hoteles extends Component {
    constructor (props) {
        super(props),
        this.state = {
            hotels:[],
        }
    }
    componentDidMount() {
        clientAxios.post('/api/hotels')
        .then(data => { 
            console.log(data);
            this.setState({ hotels: data.data});
            console.log(this.state.hotels);
        })
        .catch(err => {
            console.error(err);
        })
    }
    render() {
        return (
            <View style={{flex:1}} >
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.curriculumcontainer}
                >
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
                    </View>
                </ScrollView>
                <View style={styles.naviagtionBar}>
                    <NavigationBar properties={this.props} />
                </View>
            </View>
        )
    }
}

export default Hoteles;