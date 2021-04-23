import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './../Stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHotel, faHome,  faBook } from '@fortawesome/free-solid-svg-icons';

class NavigationBar extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        console.log(this.props);
        return (
            <View 
                style={{ flexDirection:'row', backgroundColor: '#72AC98' }}
            >
                <View 
                    style={{ flex: 1}}
                >
                    <TouchableHighlight
                        onPress={() => {this.props.properties.navigation.navigate('Hotels')}}
                    >
                        <View 
                            style={{ flexDirection:'row' }}
                        >
                            <FontAwesomeIcon 
                                icon={ faHotel }
                                color='#FFFFFF'
                                size={ 32 }
                            />
                            <Text
                                style={{ color:'#FFFFFF' }}
                            >Hoteles</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View 
                    style={{ flex: 1}}
                >
                    <TouchableHighlight
                        onPress={() => {this.props.properties.navigation.navigate('Curriculum')}}
                    >
                        <View 
                            style={{ flexDirection:'row' }}
                        >
                            <FontAwesomeIcon 
                                icon={ faBook }
                                color='#FFFFFF'
                                size={ 32 }
                            />
                            <Text
                                style={{ color:'#FFFFFF' }}
                            >Curriculum</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View 
                    style={{ flex: 1}}
                >
                    <TouchableHighlight
                        onPress={() => {this.props.properties.navigation.navigate('HomeScreen')}}
                    >
                        <View 
                            style={{ flexDirection:'row' }}
                        >
                            <FontAwesomeIcon 
                                icon={ faHome } 
                                color='#FFFFFF'
                                size={ 32 }
                            />
                            <Text
                                style={{ color:'#FFFFFF' }}
                            >Administrador</Text>
                        </View>
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