import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        //ocupa todo espaço disponivel
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: "center",
        padding: 40
    },
    content: {
        /**ocupa o tamanho disponivel */
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180
    },
    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240

    },
    okButton: {
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 58,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 8,
        /**para android */
        elevation: 3,
        /**para ios */
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },
    okButtonText: {
        color:'#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    },
});

export default styles;