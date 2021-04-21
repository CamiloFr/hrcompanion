import React from 'react'
import { View } from 'react-native';
import styles from './../Stylesheet';
import { Text } from 'react-native-elements';

class Msgerrors extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            errorname: ''
        }
    }
    render() {
        console.log(this.props);
        return (
            <View 
                style={styles.containercontent}
            >
                <View
                    style={styles.contenterror}
                >
                    <Text style={{ color: '#FFFFFF' }}>{this.props.error}</Text>
                </View>
            </View>
        )
    }
}

Msgerrors.defaultProps = {
    error: '',
  }

export default Msgerrors;