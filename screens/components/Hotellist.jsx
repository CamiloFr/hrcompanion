import React from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';

export default class HotelList extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <View 
                style={{ flex: 1, borderWidth: 0.5, borderColor: '#828282', margin: 10, borderRadius:10, backgroundColor: '#f2f4f5' }}
            >
                {
                    this.props.hotel
                    ?
                    <TouchableHighlight onPress={ () => {this.props.property.navigation.navigate("HotelPay", { hotel: this.props.hotel })}}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={{ uri: this.props.hotel.photo }}
                                style={{ width: 100, height: 100, borderRadius:10 }}
                            />
                            <View style={{ flexDirection: 'column', marginLeft:4 }}>
                                <View>
                                    <Text>{this.props.hotel.name}</Text>
                                </View>
                                <View>
                                    <Text>{this.props.hotel.country}</Text>
                                </View>
                                <View>
                                    <Text>{this.props.hotel.department}</Text>
                                </View>
                                <View>
                                    <Text>{this.props.hotel.city}</Text>
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
    property: '',
}