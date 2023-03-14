import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableNativeFeedback,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const PersonalInfo = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#3ac762', '#9cf4b4']}
      style={{flex: 1, justifyContent: 'center'}}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/bg.png')}
        style={styles.image}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/logo.png')}
              style={{width: 278, height: 53, marginTop: 50, marginBottom: 10}}
            />
            <View style={styles.form}>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>First name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter first name"
                />
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>First name</Text>
                <TextInput style={styles.input} placeholder="Enter email" />
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter first name"
                />
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>Gender</Text>
                <TextInput style={styles.input} placeholder="Male" />
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>Date of Birth</Text>
                <TextInput style={styles.input} placeholder="15/11/2021" />
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>County of residence</Text>
                <TextInput style={styles.input} placeholder="Enter Location" />
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>Enter ID Number</Text>
                <TextInput style={styles.input} placeholder="Enter ID No" />
              </View>

              <View style={styles.formBtnContainer}>
                <TouchableNativeFeedback
                  onPress={() => navigation.navigate('AuthenticatedStack')}>
                  <View style={styles.formBtn}>
                    <Text style={styles.btnText}>NEXT</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 400,
              fontSize: 14,
              color: '#008325',
            }}>
            Powered by hustlerfundhack.co.ke
          </Text>
        </ScrollView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 568,
    width: '100%',
  },

  inputLabel: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 700,
    marginTop: 30,
  },
  formCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  input: {
    fontSize: 14,
    color: '#AF9999',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#C3E0DD',
    borderRadius: 50,
    backgroundColor: '#FDFDFD',
    marginTop: 10,
    width: 370,
  },
  formBtn: {
    backgroundColor: '#3467FF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 60,
    height: 55,
    borderRadius: 50,
    marginVertical: 50,
    paddingHorizontal: 10,
  },

  formBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  formBtn: {
    backgroundColor: '#3467FF',
    paddingVertical: 14,
    borderRadius: 40,
    marginVertical: 0,
    paddingHorizontal: 10,
    width: 220,
  },

  btnText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 700,
    fontSize: 18,
  },
});
