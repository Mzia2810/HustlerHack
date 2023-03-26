import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChangeLanguage = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('');
  const dataDropdown = [
    {key: '1', value: 'English'},
    {key: '2', value: 'Spanish'},
  ];
  return (
    <LinearGradient
      colors={['#3ac762', '#9cf4b4']}
      style={{flex: 1, justifyContent: 'center'}}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/bg.png')}
        style={styles.image}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/logo.png')}
            style={{width: 278, height: 53, marginTop: 94, marginBottom: 94}}
          />
          <Text style={styles.title}>
            Extend Your husterfund loan limit Today. we negotiate on behalf of
            the client to get their loan limits increased.
          </Text>
          <Text style={styles.languageTitle}>Select language</Text>
        </View>

        <View style={styles.buttonContainer}>
          <SelectList
            boxStyles={{
              backgroundColor: '#3467FF',
              borderRadius: 10,
              borderColor: '#3467FF',
              paddingVertical: 9,
              paddingHorizontal: 19,
            }}
            dropdownTextStyles={{color: '#000000'}}
            inputStyles={{
              color: '#FFFFFF',
              fontSize: 20,
              fontWeight: '800',
              lineHeight: 24,
            }}
            setSelected={setSelected}
            data={dataDropdown}
            arrowicon={
              <Icon
                name="arrow-drop-down"
                color="#ffffff"
                style={styles.arrowIcon}
              />
            }
            search={false}
            defaultOption={{key: '1', value: 'English'}}
          />
        </View>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('Login')}>
          <View style={styles.button}>
            <Text style={styles.text}>Proceed</Text>
          </View>
        </TouchableNativeFeedback>

        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '700',
            lineHeight: 24,
            color: '#008325',
            marginBottom: 75,
          }}>
          Read terms & conditions
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 17,
            color: '#008325',
          }}>
          Powered by hustlerfundhack.co.ke
        </Text>
      </ImageBackground>
    </LinearGradient>
  );
};

export default ChangeLanguage;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 568,
    width: '100%',
  },
  title: {
    fontSize: 14,
    fontWeight: 400,
    color: '#033C13',
    textAlign: 'center',
    marginBottom: 50,
    paddingHorizontal: 36,
  },
  languageTitle: {
    fontSize: 24,
    fontWeight: 800,
    color: '#074010',
    textAlign: 'center',
    lineHeight: 29,
    marginBottom: 24,
  },
  buttonContainer: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowIcon: {
    fontSize: 25,
    marginLeft: 7,
  },
  languageBtn: {
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
  },
  text: {
    backgroundColor: '#3467FF',
    borderRadius: 10,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 800,
    lineHeight: 24,
    paddingVertical: 10,
    paddingHorizontal: 45,
  },
});
