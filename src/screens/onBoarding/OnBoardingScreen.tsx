import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const OnBoardingScreen = (props: Props) => {
    const navigation: any = useNavigation()

    return (
        <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.illustration} />

            <View style={styles.textView}>
            <Text style={styles.boldText}>Wide range of Food Categories & more</Text>
            <Text style={styles.pText}>
                Browse through our extensive list of restaurants and dishes, and when you're ready to order, simply add your
                desired items to your cart and checkout. It's that easy!
            </Text>
            </View>

            <View style={styles.buttonView}>
            <Button name="skip" onPress={() => navigation.navigate('Signin')} />

            <Button name="Next" onPress={() => navigation.navigate('OnBoardSecond')} />
            </View>
        </View>
        </View>
    );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},

content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
},

illustration: {
    borderWidth: 1,
    width: 348,
    height: 367,
    borderRadius: 20,
    borderColor: 'gray',
    backgroundColor: '#EFF2F5',
},

boldText: {
    fontWeight: '500',
    fontSize: 36,
    textAlign: 'left'
},

pText: {
    fontWeight: '400',
    fontSize: 17,
    color: '#6A798A',
    textAlign: 'left'
},

textView: {
    width: 348,
    paddingTop: 10,
    paddingBottom: 20,

},

buttonView: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 20,
    justifyContent: 'space-between',
    width: 348,
},
});
