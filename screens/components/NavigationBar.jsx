import React from 'react'
import { connect } from 'react-redux';
import { View, TouchableHighlight, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHotel, faHome,  faBook } from '@fortawesome/free-solid-svg-icons';

class NavigationBar extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <View 
                style={{ flexDirection:'row', backgroundColor: '#4A8957' }}
            >
                <View 
                    style={{ flex: 1 }}
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
                                size={ 25 }
                            />
                            <Text
                                style={{ color:'#FFFFFF' }}
                            >Hoteles</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {
                    this.props.user.type === 'SUPE' || this.props.user.type === 'ADMI'
                    ?
                        <View 
                            style={{ flex: 1}}
                        >
                            <TouchableHighlight
                                onPress={() => {this.props.properties.navigation.navigate('Curriculum2')}}
                            >
                                <View 
                                    style={{ flexDirection:'row' }}
                                >
                                    <FontAwesomeIcon 
                                        icon={ faBook }
                                        color='#FFFFFF'
                                        size={ 25 }
                                    />
                                    <Text
                                        style={{ color:'#FFFFFF' }}
                                    >Curriculum</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                     :
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
                                        size={ 25 }
                                    />
                                    <Text
                                        style={{ color:'#FFFFFF' }}
                                    >Curriculum</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                }
                {
                   this.props.user.type === 'ADMI'
                   ?
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
                                        size={ 25 }
                                    />
                                    <Text
                                        style={{ color:'#FFFFFF' }}
                                    >Administrador</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    :
                        null
                }
            </View>
        )
    }
}

NavigationBar.defaultProps = {
    // properties: '',
}

const mapStateToProps = state => {
    return {
        user: state.user,
        filter: state.filter,
        country: state.country
    }
}

export default connect(mapStateToProps)(NavigationBar);