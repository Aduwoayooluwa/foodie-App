import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { buttonInterface } from '../interfaces/componets.interfaces'


const Button = (props: buttonInterface) => {
    return<TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
}

export default Button

const styles = StyleSheet.create({
    button: {
            backgroundColor: '#45B8E9',
            padding: 10,
            borderRadius: 5,
            width: 150,
            paddingTop: 20,
            paddingBottom: 20
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    }
})