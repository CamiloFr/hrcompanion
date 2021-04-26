import React from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';

class Curriculumlist extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1, borderWidth: 0.5, borderColor: '#828282', marginTop: 40, borderRadius:10, backgroundColor: '#f2f4f5' }}>
                {
                    this.props.hotel
                    ?
                    <TouchableHighlight>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={{ uri: this.props.hoja.photo }}
                                style={{ width: 100, height: 100, borderRadius:10 }}
                            />
                            <View style={{ flexDirection: 'column', marginLeft:1 }}>
                                <View>
                                    <Text>{this.props.hoja.name}</Text>
                                </View>
                                <View>
                                    <Text>{this.props.hoja.surnames}</Text>
                                </View>
                                <View>
                                    <Text>{this.props.hoja.department}</Text>
                                </View>
                                <View>
                                    <Text>{this.props.hoja.ciudad}</Text>
                                </View>
                                <View>
                                    <Text>{this.props.hoja.genero} Estrellas</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableHighlight>
                    :
                    <Text>No hay hojas de vida.</Text>
                }
            </View>
        )
    }
}

Curriculumlist.defaultProps = {
    hoja: '',
    property: '',
}

export default Curriculumlist;