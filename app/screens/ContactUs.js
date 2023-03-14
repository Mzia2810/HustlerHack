import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ContactUs = () => {
  return (
    <LinearGradient
      colors={['#3ac762', '#9cf4b4']}
      style={{flex: 1, justifyContent: 'center'}}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/bg.png')}
        style={styles.image}>
        <View style={styles.container}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 30,
            }}>
            <Image
              source={require('../assets/logo.png')}
              style={{width: 278, height: 53}}
            />
          </View>
          <Text style={styles.title}>Online Service</Text>
          <View style={styles.email}>
            <View style={{marginRight: 10}}>
              <Text style={styles.title}>Email:</Text>
            </View>
            <View>
              <Text style={styles.emailName}>support@hustlerfundhack.com</Text>
            </View>
          </View>
          <Text style={styles.title}>Service time:: 24hrs</Text>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 400,
              fontSize: 14,
              lineHeight: 17,
              color: '#008325',
              marginTop: 327,
            }}>
            Powered by hustlerfundhack.co.ke
          </Text>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 568,
    width: '100%',
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 22,
    color: '#000000',
    marginBottom: 14,
  },
  email: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  emailName: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 22,
    color: '#000000',
  },
});
