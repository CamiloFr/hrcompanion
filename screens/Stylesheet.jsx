import React from 'react'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '##72AC98',
    },
    containercontent:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentlogin:{
        width:'80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #00000',
        backgroundColor: '#FFFFFF',
        marginTop:'40%',
        borderRadius: '3%',
        paddingTop: '10px',
        paddingBottom: '10px',
        boxShadow: '2px 2px 2px 2px #828282',
    },
    input: {
        display: 'flex',
        marginTop: '2%',
        border: '1px solid #828282',
        borderRadius: '2%',
        padding: '2%',
    },
    contentinputlogin: {
        display:'flex',
        width:'80%',
        marginTop:'4%',
    },
    contentinputrrhh: {
        display: 'flex',
        flexDirection: 'row',
        width:'90%',
        marginTop:'4%',
    },
    content: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width:'90%',
        border: '1px solid #00000',
        backgroundColor: '#FFFFFF',
        marginTop: '3%'
    },
    textrrhh: {
        flex: 1,
    },
    inputrrhh: {
        flex: 2,
        border: '2px solid #828282',
    },
    checkboxrrhh: {
        padding:'0',
        flex: 1,
    },
    contenterror: {
        marginTop: '2%',
        backgroundColor: '#c41e3a',
        width:'80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #00000',
        borderRadius: '3%',
        paddingTop: '10px',
        paddingBottom: '10px',
    },
    navigationBar:{
        backgroundColor: '#FFFFFF',
        height: 30,
        position: 'absolute', 
        flexDirection: 'row',
        bottom: 0,
        justifyContent: 'space-between'
    },
    curriculumcontainer:{
        height: '80vh',
    },
    containerbuttonsnavigation: {
        flex: 1,
    }
});

export default styles;
