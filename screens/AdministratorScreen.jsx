import React from 'react';
import { connect } from 'react-redux';
import clientAxios from '../config/axios';
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import NavigationBar from './components/NavigationBar';
import styles from './Stylesheet';

class AdministratorScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            users:[],
        };
    }
    componentDidMount() {
        clientAxios.post('/api/allusers')
        .then(data => { 
            console.log(data);
            this.setState({ users: data.data});
            console.log(this.state.users);
        })
        .catch(err => {
            console.error(err);
        })
    }
    render() {
        console.log(this.props)
        return (
            <View style={{ flex:1, backgroundColor: '#72AC98' }} >
                <ScrollView
                    style={styles.container}
                >
                    {
                        this.state.users.map((l, i) => (
                            <ListItem key={i} bottomDivider>
                                <Avatar source={{uri: l.photo}} />
                                <ListItem.Content>
                                <ListItem.Title>{l.id}</ListItem.Title>
                                <ListItem.Subtitle>{l.type}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }
                </ScrollView>
                <View style={styles.naviagtionBar}>
                        <NavigationBar properties={this.props} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AdministratorScreen);