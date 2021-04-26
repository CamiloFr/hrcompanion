import React from 'react'
import { connect } from 'react-redux';
import clientAxios from './../config/axios';
import { View, Button, ScrollView, TouchableOpacity, Text, FlatList, ListItem, CheckBox } from 'react-native';
import styles from './Stylesheet';
import NavigationBar from './components/NavigationBar'
import HotelList from './components/Hotellist'
import * as actions from './../actions';
import { set } from 'react-native-reanimated';
const Filterdata = require('./databases/Filters.json')

class Hoteles extends React.Component {
    constructor (props) {
        super(props),
        this.state = {
            hotels:[],
            filters: Filterdata,
            inicial:[]
        }
    }
    componentDidMount() {
        clientAxios.post('/api/hotels')
        .then(data => {
            this.setState({ hotels: data.data});
            this.state.inicial = this.state.hotels;
        })
        .catch(err => {
            console.error(err);
        })
    }
    getSelectedFilter() {
        let Hoteles = this.state.hotels;
        let seleccionados = this.state.filters.filter(filter => filter.isChecked)
        let Ciudades = seleccionados.filter(filter => filter.type === 'city');
        let Departamentos = seleccionados.filter(filter => filter.type === 'department');
        let Paises = seleccionados.filter(filter => filter.type === 'country');
        let Tennis = seleccionados.filter(filter => filter.type === 'tennis');
        let Futbol = seleccionados.filter(filter => filter.type === 'futbol');
        let Jacuzzi = seleccionados.filter(filter => filter.type === 'jacuzzi');
        let Piscina = seleccionados.filter(filter => filter.type === 'piscina');
        let Parking = seleccionados.filter(filter => filter.type === 'parking');
        let Filtrado = [];
        if (Ciudades.length > 0) {
            Ciudades.forEach(city => {
                let filtrado = Hoteles.filter(hotel => hotel.city === city.title);
                if (filtrado.length > 0){ 
                    filtrado.forEach(filtra => {
                        Filtrado.push(filtra);
                    })
                }
            })
        }
        if (Departamentos.length > 0) {
            Departamentos.forEach(department => {
                let filtrado = Hoteles.filter(hotel => hotel.department === department.title);
                if (filtrado.length > 0){ 
                    filtrado.forEach(filtra => {
                        Filtrado.push(filtra);
                    })
                }
            })
        }
        if (Paises.length > 0) {
            Paises.forEach(country => {
                let filtrado = Hoteles.filter(hotel => hotel.country === country.title);
                if (filtrado.length > 0){ 
                    filtrado.forEach(filtra => {
                        Filtrado.push(filtra);
                    })
                }
            })
        }
        if (Tennis.length > 0) {
            let filtrado = Filtrado.filter(hotel => hotel.tennis);
            if (filtrado.length > 0){ 
                filtrado.forEach(filtra => {
                    Filtrado.push(filtra);
                })
            }
        }
        if (Futbol.length > 0) {
            let filtrado = Filtrado.filter(hotel => hotel.futbol);
            if (filtrado.length > 0){ 
                filtrado.forEach(filtra => {
                    Filtrado.push(filtra);
                })
            }
        }
        if (Jacuzzi.length > 0) {
            let filtrado = Filtrado.filter(hotel => hotel.jacuzzi);
            if (filtrado.length > 0){ 
                filtrado.forEach(filtra => {
                    Filtrado.push(filtra);
                })
            }
        }
        if (Piscina.length > 0) {
            let filtrado = Filtrado.filter(hotel => hotel.piscina);
            if (filtrado.length > 0){ 
                filtrado.forEach(filtra => {
                    Filtrado.push(filtra);
                })
            }
        }
        if (Parking.length > 0) {
            let filtrado = Filtrado.filter(hotel => hotel.parking);
            if (filtrado.length > 0){ 
                filtrado.forEach(filtra => {
                    Filtrado.push(filtra);
                })
            }
        }
        this.setState({
            hotels: Filtrado
        })
    }
    onCheck(title){
        this.setState(state => {
            const filters = state.filters.map(filter => {
                console.log(title, filter.title);
                filter.title === title ? filter.isChecked = !filter.isChecked : null
                return filter
            })
            return {
                filters,
            }
        });
    }
    Resetear(){
        this.setState({
            hotels: this.state.inicial
        })
    }
    render() {
        console.log(this.props)
        return (
            <ScrollView
                style={styles.container}
            >
                <View style={styles.containercontent}>
                    <View style={styles.contenthotels}>
                        <View style={styles.contentinputlogin}>
                            <Button
                                title="Filtros"
                                onPress={() => {this.setState({ isVisibleFilters: true })}}
                            ></Button>
                        </View>
                        {
                            this.state.isVisibleFilters
                            ?   
                            <View style={styles.container}>
                                <FlatList
                                    data={this.state.filters}
                                    extraData={this.state}
                                    keyExtractor={(filter, index) => { filter.title + index } }
                                    renderItem={({item, index}) => ((
                                        <TouchableOpacity
                                            key={index}
                                            style={{  flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}
                                        >
                                            {
                                                item.title === 'Ciudad' || item.title === 'Departamento' || item.title === 'Pais' || item.title === 'Actividades'
                                                ?
                                                    null
                                                :
                                                    <CheckBox 
                                                        value={item.isChecked}
                                                        onValueChange={() => this.onCheck(item.title)}
                                                    />
                                                
                                            }
                                            <Text style={{ color: '#FFFFFF', marginLeft: 4 }}>{item.title}</Text>
                                        </TouchableOpacity>
                                    ))}
                                />
                                <Button
                                    title="Aplicar"
                                    color="#0096d2"
                                    onPress={() => {
                                            this.setState({ isVisibleFilters: false  })
                                            this.getSelectedFilter();
                                        }
                                    }
                                ></Button>
                                <Button
                                    title="Resetear Busqueda"
                                    color="#9A0026"
                                    onPress={() => {
                                            this.setState({ isVisibleFilters: false  })
                                            this.Resetear();
                                        }
                                    }
                                ></Button>
                            </View>
                            :
                                null
                        }
                        <ScrollView
                        >
                            <FlatList
                                data={this.state.hotels}
                                extraData={this.state}
                                keyExtractor={(item) => { item._id } }
                                renderItem={({item}) => ((<HotelList hotel={item} property={this.props} />))}
                            />
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return { 
        user: state.user,
    }
}

export default connect(mapStateToProps, actions)(Hoteles);