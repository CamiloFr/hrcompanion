import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './../Stylesheet';

class HotelList extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>{this.props.hotel.summary}</Text>
            </View>
        )
    }
}

NavigationBar.defaultProps = {
    hotel: '',
}

export default HotelList;