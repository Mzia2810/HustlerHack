import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalView = () => {
  return (
    <Modal transparent visible={visible} onRequestClose={() => setVisible(false)}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => setVisible(false)}>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1 }} />
        </TouchableOpacity>
        <View style={{ backgroundColor: '#fff', padding: 20 }}>
          <Text>Modal Content Goes Here</Text>
        </View>
      </Modal>
  )
}

export default ModalView

const styles = StyleSheet.create({})