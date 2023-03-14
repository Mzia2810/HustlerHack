import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

const LiveChat = () => {
  return (
    <View style={{flex:1}}>
     <WebView source={{ uri: 'https://tawk.to/chat/640f4ddd31ebfa0fe7f251a9/1grdsgata' }} />
    </View>
  )
}

export default LiveChat

const styles = StyleSheet.create({})