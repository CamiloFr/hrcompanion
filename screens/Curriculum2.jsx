import React from 'react'
import { connect } from 'react-redux';
import clientAxios from './../config/axios';
import * as actions from './../actions';
import NavigationBar from './components/NavigationBar'
import Curriculumlist from './components/Curriculumlist'
import { View, ScrollView, FlatList, Text } from 'react-native';
import styles from './Stylesheet';

class Curriculum2 extends React.Component {
    constructor (props) {
        super(props),
        this.state = {
            curriculum:[],
        }
    }
    componentDidMount() {
        clientAxios.post('/api/allcurriculums')
        .then(data => { 
            console.log(data);
            this.setState({ curriculum: data.data});
        })
        .catch(err => {
            console.error(err);
        })
    }
    render() {
        return (
                <View style={{ flex:1, backgroundColor: '#72AC98' }} >
                {
                    this.state.curriculum.length === 0
                    ?
                        <View style={{ flex:1 }}>
                            <ScrollView
                                style={styles.container}
                                contentContainerStyle={styles.curriculumcontainer}
                            >
                                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center', marginTop:'5%' }}>No hay hojas de vida registradas</Text>
                            </ScrollView>
                        </View>
                    :
                    <View>
                        <ScrollView
                        style={styles.container}
                        contentContainerStyle={styles.curriculumcontainer}
                        >
                            <View style={styles.content} style={{ backgroundColor: '#72AC98' }}>
                                <FlatList
                                    data={this.state.curriculum}
                                    extraData={this.state}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({item}) => ((<Curriculumlist hoja={item} property={this.props} />))}
                                />
                            </View>
                        </ScrollView>
                    </View>

                }
                </View>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.user }
}

export default connect(mapStateToProps, actions)(Curriculum2);