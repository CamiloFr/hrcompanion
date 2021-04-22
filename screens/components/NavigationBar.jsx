import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './../Stylesheet';

class NavigationBar extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        console.log(this.props);
        return (
            <View style={{ flexDirection }}>
                <View>
                    <TouchableHighlight
                        onPress={() => {this.props.properties.navigation.navigate('Hotels')}}
                    >
                        <Text>Hoteles</Text>
                    </TouchableHighlight>
                </View>
            </View>
            // <View style={{ flexDirection:'row' }}>
            //     <View style={{ flex: 1 }}>
            //         <Button
            //                 title="Hoteles"
            //                 onPress={() => {this.props.properties.navigation.navigate('Hotels')}}
            //         ></Button>
            //     </View>
            //     <View style={{ flex: 1}}>
            //         <Button
            //                 title="Curriculum"
            //                 onPress={() => {this.props.properties.navigation.navigate('Curriculum')}}
            //         ></Button>
            //     </View>
            // </View>
        )
    }
}

NavigationBar.defaultProps = {
    properties: '',
}

export default NavigationBar;