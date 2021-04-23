import React, { Component } from 'react'
import { connect } from 'react-redux';
import clientAxios from './../config/axios';
import { View, Button, ScrollView, TextInput, Text, FlatList } from 'react-native';
import styles from './Stylesheet';
import NavigationBar from './components/NavigationBar'
import HotelList from './components/Hotellist'
import * as actions from './../actions';

class Hoteles extends Component {
    constructor (props) {
        super(props),
        this.state = {
            hotels:[],
        }
    }
    componentDidMount() {
        clientAxios.post('/api/hotels')
        .then(data => { 
            console.log(data);
            this.setState({ hotels: data.data});
            console.log(this.state.hotels);
            let countrys = this.state.hotels.map(data => {
                let datas = {};
                datas.country = data.country;
                datas.isChecked = false;
                return datas
            });
            this.props.country_change(countrys);
            console.log(countrys)
        })
        .catch(err => {
            console.error(err);
        })
    }
    componentDidUpdate(){
        console.log('updated');
        console.log(this.state);
    }
    render() {
        console.log(this.props)
        return (
            <View style={{flex:1}} >
                <Button
                    title="Filtros"
                    onPress={() => {this.props.navigation.navigate("HotelFilter")}}
                ></Button>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.curriculumcontainer}
                >
                    <View style={styles.content}>
                        <FlatList
                            data={this.state.hotels}
                            extraData={this.state}
                            keyExtractor={(item) => item.id}
                            renderItem={({item}) => ((<HotelList hotel={item} />))}
                        />
                    </View>
                </ScrollView>
                <View style={styles.naviagtionBar}>
                    <NavigationBar properties={this.props} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { filter: state.filter }
}

export default connect(mapStateToProps, actions)(Hoteles);