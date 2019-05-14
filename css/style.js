import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    //controller
    controllerView: {
        flex: 1,
        flexDirection: 'row',
    },
    //listGrid
    eachGrid: {
        width: 120,
        height: 120,
        margin: 8,
        flexDirection: 'column',
    },
    contentGrid: {
        alignItems: 'center',
    },
    textContentGrid: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'red'
    },
    //listRow
    eachRow: {
        height: 120,
        borderBottomWidth: 3,
        flexDirection: 'row'
    },
    imageContainerRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageRow: {
        flex:1,
        height: 100
    },
    rightContentRow: {
        flex: 3,
        flexDirection:'column'
    },
    titleRow: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'red',
        flex: 1,
        marginLeft:5,
    },
    contentRow: {
        flex: 3,
        marginLeft:3
    },
})