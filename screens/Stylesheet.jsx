import React from 'react'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#72AC98',
    },
    containercontent: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentlogin: {
        width: '80%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f4f5',
        marginTop: 200,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 20,
        elevation: 20,
    },
    contentcurriculum: {
        width: '80%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f4f5',
        marginTop: 40,
        marginBottom: 40,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 20,
        elevation: 20,
    },
    contenthotels: {
        width: '90%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f4f5',
        marginTop: 40,
        marginBottom: 40,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 20,
        elevation: 20,
    },
    input: {
        flexDirection: 'row',
        marginTop: 10,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#828282',
        padding: 2,
    },
    contentinputlogin: {
        flex: 1,
        width: '80%',
        marginTop: 10,
    },
    contentinputrrhh: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        marginTop: 20,
    },
    contenthotellist: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#828282',
        margin: 10, 
        borderRadius: 5,
        backgroundColor: '#e3e7f0'
    },
    textrrhh: {
        flex: 1,
        marginLeft: 5,
    },
    inputrrhh: {
        flex: 2,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#828282',
    },
    contenterror: {
        flex: 1,
        width: '80%',
        backgroundColor: '#c41e3a',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#828282',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
});

export default styles;
