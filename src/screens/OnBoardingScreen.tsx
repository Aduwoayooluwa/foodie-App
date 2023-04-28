import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../components/PrimaryButton'

type Props = {}

const OnBoardingScreen = (props: Props) => {
    return(
        <View style={styles.container}>
            <View>
                <View style={styles.illustration}>
                    {/* for the illustration */}
                </View>
                
                <View style={styles.textView}>
                    <Text style={styles.boldText}>Wide range of Food Categories & more</Text>
                    <Text style={styles.pText}>
                    Browse through our extensive list of restaurants and dishes, 
                    and when you're ready to order, simply add your desired items 
                    to your cart and checkout. It's that easy!
                    </Text>
                </View>
            </View>

            <View style={styles.viewButton}>
                {/* flexed */}
                <Button name="skip" onPress={() =>''} />

                <Button name='Next' onPress={() => ''}/>
            </View>
        </View>
    )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
    container: {
        paddingLeft: 50,
        paddingRight:50
    },

    illustration: {
        borderWidth: 1,
        width: 348,
        height: 367,
        borderRadius:20,
        borderColor: 'gray',
        backgroundColor: '#EFF2F5'
    },

    boldText: {
        fontWeight: "500",
        fontSize: 36

    },

    pText: {
        fontWeight: "400",
        fontSize: 17,
        color: "#6A798A"
    },
    textView: {
        width: 348,
        paddingTop: 10,
        paddingBottom: 20

    },
    viewButton: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 20,
        justifyContent: 'space-between'
    }
})