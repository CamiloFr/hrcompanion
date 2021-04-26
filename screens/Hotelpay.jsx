import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faSwimmer,  faHotTub, faParking, faFootballBall, faTableTennis } from '@fortawesome/free-solid-svg-icons';
import styles from './Stylesheet';

export default class Hotelpay extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            names:'',
        }
    }
    render() {
        return (
            <View style={{ flex:1 }} >
                 <ScrollView
                    style={styles.container}
                >
                    <View style={styles.content}>
                        <View>
                            <Text
                                style={{ fontWeight: 'bold', textAlign: 'center' }}
                            >{this.props.route.params.hotel.name}</Text>
                        </View>
                        <Image
                            source={{ uri: this.props.route.params.hotel.photo }}
                            style={{ width: 325, height: 200, resizeMode: 'contain' }}
                        />
                        <View style={{ marginTop:4 }}>
                            <Text>{this.props.route.params.hotel.summary}</Text>
                        </View>
                        <View style={{ flex:1, flexDirection: 'row', marginTop:4 }}>
                            <Text
                                style={{ marginLeft:'1%' }}
                            >
                                {this.props.route.params.hotel.starts}
                                <FontAwesomeIcon 
                                    icon={ faStar }
                                    color='#DFDF61'
                                    size={ 25 }
                                />
                            </Text>
                            {
                                this.props.route.params.hotel.pisicina
                                ?
                                    <Text
                                        style={{ marginLeft:'3%' }}
                                    >Piscina
                                        <FontAwesomeIcon 
                                            icon={ faSwimmer }
                                            color='#0096d2'
                                            size={ 25 }
                                        />
                                    </Text>
                                :
                                    null
                            }
                            {
                                this.props.route.params.hotel.jacuzzi
                                ?
                                    <Text
                                        style={{ marginLeft:'3%' }}
                                    >Jacuzzi
                                        <FontAwesomeIcon 
                                            icon={ faHotTub }
                                            color='#0096d2'
                                            size={ 25 }
                                        />
                                    </Text>
                                :
                                    null
                            }
                            {
                                this.props.route.params.hotel.futbol
                                ?
                                    <Text
                                        style={{ marginLeft:'3%' }}
                                    >Futbol
                                        <FontAwesomeIcon 
                                            icon={ faFootballBall }
                                            color='#828282'
                                            size={ 25 }
                                        />
                                    </Text>
                                :
                                    null
                            }
                            {
                                this.props.route.params.hotel.tennis
                                ?
                                    <Text
                                        style={{ marginLeft:'3%' }}
                                    >Tennis
                                        <FontAwesomeIcon 
                                            icon={ faTableTennis }
                                            color='#72AC98'
                                            size={ 25 }
                                        />
                                    </Text>
                                :
                                    null
                            }
                            {
                                this.props.route.params.hotel.parking
                                ?
                                    <Text
                                        style={{ marginLeft:'3%' }}
                                    >Parking
                                        <FontAwesomeIcon 
                                            icon={ faParking }
                                            color='#0096d2'
                                            size={ 25 }
                                        />
                                    </Text>
                                :
                                    null
                            }
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text>Ubicacion</Text>
                            <Text>{this.props.route.params.hotel.country}</Text>
                            <Text>{this.props.route.params.hotel.department}</Text>
                            <Text>{this.props.route.params.hotel.city}</Text>
                        </View>
                        <View style={styles.contentinputrrhh} style={{ textAlign: 'center', marginTop: 3 }}>
                            <Text>Informacion del pagador</Text>
                        </View>
                        <View
                            style={{
                                margin: '1%',
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                            }}
                        />
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
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            >Apellidos *</Text>
                            <TextInput
                                style={styles.inputrrhh}
                                onChangeText={data => { this.TypeUser({textinput:'surnames', data:data}) }}
                                placeholder="Apellidos"
                            />
                        </View>
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            >Numero de teléfono *</Text>
                            <TextInput
                                style={styles.inputrrhh}
                                onChangeText={data => { this.TypeUser({textinput:'surnames', data:data}) }}
                                placeholder="Telefono"
                            />
                        </View>
                        <View style={styles.contentinputrrhh}>
                            <Text
                                style={styles.textrrhh}
                            >Correo electrónico *</Text>
                            <TextInput
                                style={styles.inputrrhh}
                                onChangeText={data => { this.TypeUser({textinput:'surnames', data:data}) }}
                                placeholder="Correo electrónico"
                            />
                        </View>
                        <View style={styles.contentinputrrhh} style={{ textAlign: 'center', marginTop: 3 }}>
                            <Text>Métodos de pago</Text>
                        </View>
                        <View
                            style={{
                                margin: 1,
                                // borderBottomColor: 'black',
                                // borderBottomWidth: 1,
                            }}
                        />
                        <TouchableHighlight>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('./../assets/boton-pse.png')}
                                    style={{ width: 322, height: 50, resizeMode: 'contain' }}
                                />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('./../assets/visa.png')}
                                    style={{ width: 322, height: 50, resizeMode: 'contain' }}
                                />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('./../assets/mastercard.png')}
                                    style={{ width: 322, height: 50, resizeMode: 'contain' }}
                                />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('./../assets/paypal.png')}
                                    style={{ width: 322, height: 50, resizeMode: 'contain' }}
                                />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('./../assets/mercadopago.png')}
                                    style={{ width: 322, height: 50, resizeMode: 'contain' }}
                                />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('./../assets/efecty.png')}
                                    style={{ width: 322, height: 50, resizeMode: 'contain' }}
                                />
                            </View>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        )
    }
}