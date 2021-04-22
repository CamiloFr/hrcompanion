import React, { Component } from 'react'
import { View, Button, ScrollView, TextInput, Text } from 'react-native';
import NavigationBar from './components/NavigationBar'
import styles from './Stylesheet';

class Hoteles extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        console.log(this.props);
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