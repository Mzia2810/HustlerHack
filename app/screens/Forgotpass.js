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
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const ForgotPass = () => {
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
              style={{width: 278, height: 53, marginTop: 50, marginBottom: 50}}
            />
            <View style={styles.form}>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="+255 (0) 7xxxxxxxx"
                  keyboardType="phone-pad"
                />
              </View>
              <View style={styles.OtpLable}>
                <Text style={styles.otpText}>OTP</Text>
              </View>
              <View style={styles.numberVerify}>
                <TextInput
                  placeholder="+255 (0) 7xxxxxxxx"
                  keyboardType="phone-pad"
                />
                <Text style={styles.VerifyBtn}>SEND</Text>
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput style={styles.input} placeholder="Input Password" />
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.inputLabel}>Confirm Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                />
              </View>
              <View style={styles.formBtnContainer}>
                <TouchableNativeFeedback>
                  <View style={styles.formBtn}>
                    <Text style={styles.btnText}>NEXT</Text>
                  </View>
                </TouchableNativeFeedback>
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
          </View>
        </ScrollView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 568,
    width: '100%',
  },

  form: {
    paddingHorizontal: 20,
  },

  inputLabel: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 700,
    marginTop: 30,
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

  numberVerify: {
    width: 370,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#C3E0DD',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FDFDFD',
  },

  VerifyBtn: {
    backgroundColor: '#FEF0F0',
    borderWidth: 1,
    borderColor: '#BAAAAA',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 60,
    fontSize: 14,
    color: '#AF9999',
    fontWeight: 700,
  },

  inputLabel: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 700,
    marginTop: 30,
    textAlign: 'left',
  },

  OtpLable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 700,
    marginTop: 10,
    textAlign: 'left',
    marginTop: 30,
  },

  formBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  formBtn: {
    backgroundColor: '#3467FF',
    paddingVertical: 14,
    borderRadius: 40,
    marginVertical: 30,
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
