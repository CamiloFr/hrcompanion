import React, { Component } from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';
import styles from './../Stylesheet';

class HotelList extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {
                    this.props.hotel
                    ?
                    <TouchableHighlight>
                        <View style={{ flexDirection: 'row' }}>
                            {/* <View> */}
                                <Image
                                    source={{ uri: this.props.hotel.photo }}
                                    style={{ width: 100, height: 100 }}
                                />
                            {/* </View> */}
                            <View flex style={{ flexDirection: 'column' }}>
                                <View>
                                    <Text>{this.props.hotel.name}</Text>
                                </View>
                                <View>
                                    <Text>{this.props.hotel.summary}</Text>
                                </View>
                                <View>
                                    <Text>{this.props.hotel.starts} Estrellas</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableHighlight>
                    :
                    <p>No hay hoteles.</p>
                }
            </View>
        )
    }
}

HotelList.defaultProps = {
    hotel: '',
}

export default HotelList;