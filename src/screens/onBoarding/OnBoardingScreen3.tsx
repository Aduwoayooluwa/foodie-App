import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const OnBoardingScreen3 = (props: Props) => {
    const navigation: any = useNavigation()

    return (
        <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.illustration} />

            <View style={styles.textView}>
            <Text style={styles.boldText}>Get started on Ordering your Food</Text>
            <Text style={styles.pText}>
            Please create an account or sign in to your existing account to start browsing our selection of delicious meals from your favorite restaurants.
            </Text>
            </View>

            <View style={styles.buttonView}>
            <Button name="skip" onPress={() => navigation.navigate('Signin')} />

            <Button name="Next" onPress={() => navigation.navigate('Signin')} />
            </View>
        </View>
        </View>
    );
};

export default OnBoardingScreen3;

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
