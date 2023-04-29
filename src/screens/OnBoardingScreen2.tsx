import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const OnBoardingScreen2 = (props: Props) => {
    const navigation: any = useNavigation()

    return (
        <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.illustration} />

            <View style={styles.textView}>
            <Text style={styles.boldText}>Free Deliveries for ONE MONTH!!</Text>
            <Text style={styles.pText}>
            Get your favorite meals delivered to your doorstep for free with our online food delivery app - enjoy a whole month of complimentary delivery!
            </Text>
            </View>

            <View style={styles.buttonView}>
            <Button name="skip" onPress={() => ''} />

            <Button name="Next" onPress={() => navigation.navigate('OnBoardingScreen3')} />
            </View>
        </View>
        </View>
    );
};

export default OnBoardingScreen2;

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
},

pText: {
    fontWeight: '400',
    fontSize: 17,
    color: '#6A798A',
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
