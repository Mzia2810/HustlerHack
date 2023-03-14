import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Records = () => {
  return (
    <View style={styles.container}>
      <View style={styles.singleCard}>
        <Text style={styles.cardText}>02/20/2023</Text>
        <Text style={styles.cardText}>Pending</Text>
        <Text style={styles.cardText}>Ksh 1,500</Text>
          </View>
           <Text
          style={{
            textAlign: 'center',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 17,
            color: '#008325',
            marginTop: 490,
          }}>
          Powered by hustlerfundhack.co.ke
        </Text>
    </View>
  );
};

export default Records;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  singleCard: {
    borderWidth: 1,
    borderColor: '#0095ff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 14,
    color: '#000000',
  },
});
