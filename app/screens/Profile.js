import React from 'react';
import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          resizeMode="contain"
          style={{width: 202, height: 39, textAlign: 'center',marginTop: 50 }}
          source={require('../assets/logo.png')}
        />
      </View>
      <View style={styles.profileInfo}>
        <View>
          <Text style={styles.profileInfoTitle}>Name</Text>
          <Text style={styles.profileInfoTitle}>Phone number</Text>
          <Text style={styles.profileInfoTitle}>Email address</Text>
          <Text style={styles.profileInfoTitle}>Gender</Text>
          <Text style={styles.profileInfoTitle}>Date of birth</Text>
          <Text style={styles.profileInfoTitle}>County of residence </Text>
          <Text style={styles.profileInfoTitle}>ID Number</Text>
          <Text style={styles.profileInfoTitle}>Take photo</Text>
        </View>
        <View>
          <Text style={styles.profileInfoText}>kieran munyi</Text>
          <Text style={styles.profileInfoText}>
            255787898789 <Icon name="edit" size={18} color="#000000" />
          </Text>
          <Text style={styles.profileInfoText}>many@gmail.com</Text>
          <Text style={styles.profileInfoText}>male</Text>
          <Text style={styles.profileInfoText}>18/11/2021</Text>
          <Text style={styles.profileInfoText}>Kilimanjaro</Text>
          <Text style={styles.profileInfoText}>Kilimanjaro</Text>
          <Text style={[styles.profileInfoText, styles.addBtn]}>add</Text>
        </View>
      </View>
      <TouchableNativeFeedback onPress={() => navigation.navigate('Forgotpass')}>
        <View style={styles.resetPassContainer}>
          <Text style={styles.resetPass}>Reset Password</Text>
          <Icon name="lock" size={22} color="#000000" />
        </View>
      </TouchableNativeFeedback>
      <Text
          style={{
            textAlign: 'center',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 17,
            color: '#008325',
            marginTop: 80,
          }}>
          Powered by hustlerfundhack.co.ke
        </Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  image: {
    alignItems: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 50,
  },
  profileInfoTitle: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 22,
    color: '#000000',
    marginBottom: 15,
  },
  profileInfoText: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 22,
    color: '#000000',
    marginBottom: 15,
  },
  addBtn: {
    color: '#3BC762'
  },
  resetPassContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  resetPass: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 22,
    color: '#14FA47',
    marginRight: 6,
  },
})