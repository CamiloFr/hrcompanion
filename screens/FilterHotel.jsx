import React from 'react'
import * as actions from './../actions';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { View, CheckBox, Text } from 'react-native';

class FilterHotel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            country: [],
            checkedcountry: [],
            department: '',
            city: '',
            starts: 0,
            pisicina: false,
            jacuzzi: false,
            futbol: false,
            tennis: false,
            parking: false,
        }
    }
    componentDidMount() {
        this.setState({ country: this.props.country });
        console.log(this.state);
    }
    render() {
        console.log(this.props)
        return (
            <View>
                <View
                    style={{
                        margin: '1%',
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                {
                    this.props.country.length > 0
                    ?
                    <View>
                        {this.props.country.map((item, i) => (
                            <View key={i}>
                                <View>
                                    <Text>{item.country}</Text>
                                </View>
                                <View>
                                    <CheckBox
                                        // value={this.state.country[i].isChecked}
                                        // onValueChange={() => this.setState({country: this.state.country[i].isChecked})}
                                    />
                                </View>
                            </View>
                        ))}
                    </View>
                    :
                        null
                }
                <View
                    style={{
                        margin: '1%',
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                <Button
                    title="Aplicar"
                    onPress={() => {this.props.navigation.navigate("Hotels")}}
                ></Button>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { 
        filter: state.filter,
        country: state.country
    }
}

export default connect(mapStateToProps, actions)(FilterHotel);