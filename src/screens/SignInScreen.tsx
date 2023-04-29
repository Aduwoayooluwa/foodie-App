import React from 'react'
import { View, Text, StyleSheet, TextInput} from 'react-native'
import Button from '../components/PrimaryButton'

type Props = {}

const SignInScreen = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.smallText}>Sign up or Login to your Account</Text>

                <View style={styles.loginSwitch}>
                    <View style={styles.login}>
                    <Text style={styles.text}>Login</Text>
                    </View>
                    
                    <View style={styles.login}>
                        <Text style={styles.text}>Sign Up</Text>
                    </View> 
                </View>
                
            <View>
                <TextInput style={styles.input} placeholder='Username'/>
                <TextInput style={styles.input} placeholder="Password" />

            </View>

            <Button name='SignIn' onPress={() => ''} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        padding: 20
    },
    welcome: {
        fontSize: 36
    },
    smallText: {
        fontSize: 17
    },
    login: {
        backgroundColor: '#F4739E',
        color:'white',
        width: 151,
        textAlign: 'center',
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 20,
    },

    text: {
        textAlign: 'center',
        color: 'white',
        fontWeight: "600",
    },
    loginSwitch: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: "#FDD3E1",
        borderRadius: 100,
        marginTop: 10,
        width:302
        
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 100,
        padding: 20,
        marginVertical: 10,
        width: '100%',
        fontSize: 18,
      },


})
export default SignInScreen