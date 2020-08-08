import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        //ocupa todo espaço disponivel
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: "center",
        padding: 40
    },
    banner: {
        width: '100%',
        //deixa a imagem comprimida para respeitar o width: '100%'
        resizeMode: 'contain'
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: "space-between" 
    },
    button:{
        height: 150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
        /**para android */
        elevation: 3,
        /**para ios */
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,


    },
    buttonPrimary:{
        backgroundColor: '#9871f5'
    },
    buttonSecondary:{
        backgroundColor: '#04d361'
    },
    buttonText:{
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20
    },
    totalConnections:{
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40
    }
});

export default styles;